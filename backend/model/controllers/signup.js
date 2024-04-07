import User from "../model/User.js";
import bcyrpt from 'bcryptjs'

const  signup =  async(req, res, next) => {
    const {name, email, password} = req.body;
    
    let existingUser;
    
    try{
        existingUser = await User.findOne({email});
    
    }catch(err){
      return  console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message : 'User already exists ! Login Instead'})
    }
    const  hashedPassword = bcyrpt.hashSync(password);
    
    const user = new User({
        name,
        email,
       password: hashedPassword,
       blogs: []
    });
   
    
    try{
          await  user.save();
    
    }catch(err){
      return  console.log(err);
    }
    return res.status(201).json({user})
    }
    
    export default  signup;
    