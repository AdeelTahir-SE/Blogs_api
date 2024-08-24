import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function createBlog(title, content, tags, category) {
  try {
    await client.blog.create({
      data: {
        title,
        content,
        tags,
        category,
      },
    });
  } catch (error) {
    console.error("Error creating blog:", error);
  }
}

export async function deleteBlog(id) {
  try {
    await client.blog.delete({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
  }
}

export async function updateBlog(id, object) {
  try {
    await client.blog.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title: object.title ?? undefined,
        content: object.content ?? undefined,
        tags: object.tags ?? undefined,
        category: object.category ?? undefined,
      },
    });
  } catch (error) {
    console.error("Error updating blog:", error);
  }
}

export async function getAllBlogs() {
  try {
    return await client.blog.findMany();
  } catch (error) {
    console.error("Error fetching all blogs:", error);
  }
}

export async function getBlogByID(id) {
  try {
    const blog = await client.blog.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!blog) {
      console.log("Blog not found");
    }
    return blog;
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
  }
}

export async function getFilteredBlog(searchTerm) {
  try {
    const lowerCaseTerm = searchTerm.toLowerCase();

    const blogs = await client.blog.findMany();

    return blogs.filter(blog => {
      return (
        blog.title.toLowerCase().includes(lowerCaseTerm) ||
        blog.content.toLowerCase().includes(lowerCaseTerm) ||
        blog.tags.some(tag => tag.toLowerCase().includes(lowerCaseTerm)) ||
        blog.category.toLowerCase().includes(lowerCaseTerm)
      );
    });
  } catch (error) {
    console.error("Error filtering blogs:", error);
  }
}
