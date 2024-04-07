import express from 'express';
import getAllBlogs from '../controllers/blogcontrols/blog-controller.js';
import addBlog from '../controllers/blogcontrols/addBlog.js';
import updateBlog from '../controllers/blogcontrols/updateBlog.js';
import getbyid from '../controllers/blogcontrols/getbyid.js';
import deleteblog from '../controllers/blogcontrols/deleteBlog.js';
import getByUserId from '../controllers/blogcontrols/getbyuserid.js';

const BlogRouter = express.Router();

BlogRouter.get("/", getAllBlogs)
BlogRouter.post("/add",addBlog)
BlogRouter.put("/update/:id", updateBlog)
BlogRouter.get("/:id", getbyid) 
BlogRouter.delete("/:id", deleteblog )
BlogRouter.get("/user/:id", getByUserId )


export default BlogRouter;  