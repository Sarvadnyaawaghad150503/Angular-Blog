import Blog from "../../model/Blog.js";
import blogs from '../../model/User.js'
import User from "../../model/User.js";

const deleteblog = async (req, res, next) => {
    const id = req.params.id;

    try {
        // Find the blog by ID and populate the user
        const blog = await Blog.findByIdAndDelete(id).populate('user');
        
        // Ensure the blog exists
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Get the user's information from the request (assuming it's stored in req.user)
        const currentUser = req.user;

        // Check if the current user is the author of the blog
        if (currentUser.name !== blog.author) {
            return res.status(403).json({ message: "Unauthorized: You can only delete your own blogs" });
        }

        // Remove the blog from the user's blogs array and save the user
        const user = await User.findById(blog.user);
        user.blogs.pull(blog);
        await user.save();

        // Respond with success message
        return res.status(200).json({ message: "Successfully deleted" });
    } catch (error) {
        console.error(error);
        // return res.status(500).json({ message: "Internal server error" });
    }
};

export default deleteblog;
 