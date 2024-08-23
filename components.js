import { PrismaClient } from "@prisma/client";

const client =new PrismaClient();
export async function createBlog(title,content,tags,category){
await client.blog.create({
    data: {
        title: title,
        content: content,
        tags: tags,
        category:category
}        
})
}


export async function deleteBlog(id){
    await client.blog.delete({
        where: {
            id: id
        }
    })
}


export async function updateBlog(id,object){
await client.blog.update({
    where: {
        id: id
    },
    data: {
        title: object.title??object.title,
        content: object.content??object.content,
        tags: object.tags??object.tags,
        category: object.category??object.category
    }
});
}

export async function getAllBlogs(){
    return await client.blog.findMany();
}

export async function getBlogByID(id){
    return await client.blog.findUnique({
        where: {
            id: id
        }
    })
}