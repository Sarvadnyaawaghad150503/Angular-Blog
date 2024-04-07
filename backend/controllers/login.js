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
        return res.status(404).json({message : 'Could not find User by this Email'})
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

   if(!isPasswordCorrect){
    return res.status(400).json({message: 'Incorrect password'})
   }
   return res.status(200).json({message : 'Login successful', user: existingUser});

}
export default login;