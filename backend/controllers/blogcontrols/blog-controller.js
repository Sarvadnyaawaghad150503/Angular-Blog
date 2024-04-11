import Blog from "../../model/Blog.js";

const getAllBlogs = async (req, res, next) => {
    try {
        const blogs = await Blog.find();
        
        if (blogs.length === 0) {
            return res.status(404).json({
                message: "No blogs found"
            });
        }

        // Reverse the order of the blogs array
        const reversedBlogs = blogs.reverse();

        return res.status(200).json({ blogs: reversedBlogs });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

export default getAllBlogs;
