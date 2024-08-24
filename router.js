import Router from "express"
import { getAllBlogs,getBlogByID,createBlog,deleteBlog,updateBlog ,getFilteredBlog} from "./components.js";
const router =Router();

router.get("/posts", async (req, res) => {
    const { term } = req.query;

    try {
        if (term) {
            const blogs = await getFilteredBlog(term);
            console.log(term)
            res.json(blogs);
        } else {
            const blogs = await getAllBlogs();
            res.json(blogs);
        }
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ message: "Failed to fetch blogs" });
    }
});


router.get("/posts/:id",async (req,res)=>{
    const {id} =req.params
    const blog =await getBlogByID(id);
    res.json(blog)

});


router.post("/posts",async(req,res)=>{
    console.log(req.body)
    const {title,content,tags,category} =req.body
await createBlog(title,content,tags,category);
res.status(200).json({message:"created successfully!"})
console.log("blog created successfully")
})


router.put("/posts/:id",async(req,res)=>{
    const {id} =req.params
    const{object}=req.body
    await updateBlog(id,object);
res.status(200).json({message:"updated successfully"})
});

router.delete("/posts/:id",async(req,res)=>{
const {id} =req.params
await deleteBlog(id)
res.status(200).json({message:"deleted successfully!"})
})



export default router;