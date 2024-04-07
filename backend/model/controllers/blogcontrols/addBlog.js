import mongoose from "mongoose";
import Blog from "../../model/Blog.js";
import User from "../../model/User.js";

const addBlog = async(req, res, next) => {
const {title, description, image, user} = req.body;
let existingUser;
try{
    existingUser = await User.findById(user)
}catch(err){
    return console.log(err)
}

if(!existingUser){return res.status(400)({message: "Unable to find user by id"})}

const blog = new Blog({
    title, 
    description,
    image,
    user,
});

try{
const session = await mongoose.startSession();
session.startTransaction();

await blog.save({session});
existingUser.blogs.push(blog)
await existingUser.save({session});
await session.commitTransaction();

}catch(err){
     console.log(err);
     return res.status(500).json({message: err})
}
return res.status(200).json({blog})
};
export default addBlog