import Blog from "../../model/Blog.js";


const getAllBlogs = async(req, res, next) => {
    let blogs;

    try{
        blogs = await Blog.find().populate('user');
    }catch(err){
        return console.log(err);
    }

    if(!blogs){
        return res.status(400).json({
            message: "No blogs found"
        })
    }
    return res.status(200).json({blogs})
}

export default getAllBlogs; 