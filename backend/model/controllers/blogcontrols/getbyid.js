import Blog from "../../model/Blog.js";

const getbyid = async(req, res, next) => {
const id = req.params.id;

let blog;
try{
    blog = await Blog.findById(id)
}
catch(err){
    return console.log(err)
}

if(!blog){
    return res.status(404).json({message: " No blog found"})
}
return res.status(200).json({blog})
}
export default getbyid