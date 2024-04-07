import mongoose from "mongoose";
import Blog from "../../model/Blog.js";
import User from "../../model/User.js";

const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;
    let existingUser;

    try {
        existingUser = await User.findById(user);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error finding user by ID" });
    }

    if (!existingUser) {
        return res.status(400).json({ message: "Unable to find user by ID" });
    }

    const blog = new Blog({
        title,
        description,
        image,
        user,
        author: existingUser.name // Assuming user's name is stored in 'name' field of User model
    });

    try {
        const session = await mongoose.startSession();
        session.startTransaction();

        await blog.save({ session });
        existingUser.blogs.push(blog);
        await existingUser.save({ session });

        await session.commitTransaction();
        session.endSession();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Error adding blog" });
    }

    return res.status(200).json({ blog });
};

export default addBlog;
