import Blog from "../../model/Blog.js";
import blogs from '../../model/User.js'
import User from "../../model/User.js";

const deleteblog = async(req, res, next) => {

    const id = req.params.id;

    let blog;
    try{
        blog = await Blog.findByIdAndRemove(id).populate('user');
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    }catch(err){
        return console.log(err)
    }

    if(!blog){
        return res.status(500).json({message: "Unable to Delete"})
    }
    return res.status(200).json({message : 'SUccesfully deleted'})
}
export default deleteblog;
