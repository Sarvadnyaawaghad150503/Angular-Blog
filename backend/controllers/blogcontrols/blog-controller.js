// import Blog from "../../model/Blog.js";


// const getAllBlogs = async(req, res, next) => {
//     let blogs;

//     try{
//         blogs = await Blog.find().populate('user');
//     }catch(err){
//         return console.log(err);
//     }

//     if(!blogs){
//         return res.status(400).json({
//             message: "No blogs found"
//         })
//     }
//     return res.status(200).json({blogs})
// }

// export default getAllBlogs; 

import Blog from "../../model/Blog.js";

const getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        
        if (blogs.length === 0) {
            return res.status(404).json({
                message: "No blogs found"
            });
        }

        return res.status(200).json({ blogs });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

export default getAllBlogs;
