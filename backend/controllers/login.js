import User from "../model/User.js";
import bcrypt from 'bcryptjs'

const login = async(req, res, next) => {
    const { email, password} = req.body;
    
    let existingUser;
    
    try{
        existingUser = await User.findOne({email});
    
    }catch(err){
      return  console.log(err);
    }
    if(!existingUser){
        return res.status(404).json({message : 'COuld not find User bby thiss Email'})
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

   if(!isPasswordCorrect){
    return res.status(400).json({message: 'Incorrect password'})
   }
   return res.status(200).json({message : 'login succesgul', user: existingUser});

}
export default login;