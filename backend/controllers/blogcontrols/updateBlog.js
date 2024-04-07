import Blog from "../../model/Blog.js";

const updateBlog = async(req, res, next) => {
    const {title , description} = req.body;
const blogId =  req.params.id;
let blog;

try{
    blog = await Blog.findByIdAndUpdate(blogId, {
        title,
        description
    
    })
}catch(err){
    return console.log(err);
}

if(!blog){
    return res.status(500).json({
        message: "Unable to update the blog"
    })
}
return res.status(200).json({blog});

};
export default updateBlog