import Router from "express"
import { getAllBlogs,getBlogByID,createBlog,deleteBlog,updateBlog } from "./components.js";
const router =Router();
router.get("/posts",async (req,res)=>{
    const blogs =await getAllBlogs()
res.json(blogs)
});

router.get("/posts/:id",async (req,res)=>{
    const {id} =req.params
    const blog =await getBlogByID(id);
    res.json(blog)

});


router.post("/posts",async(req,res)=>{
    console.log(req.body)
    const {title,content,tags,category} =req.body
await createBlog(id,title,content,tags,category);
res.status(200).json({message:"created successfully!"})
console.log("blog created successfully")
})


router.put("/posts/:id",async(req,res)=>{
    const {id} =req.params
    const{object}=req.body
    await updateBlog(id,object)

});

router.delete("/posts/:id",async(req,res)=>{
const {id} =req.params
await deleteBlog(id)
})




export default router;