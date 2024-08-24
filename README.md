# Blog API

## Overview

The Blog API provides a set of endpoints for managing blog posts. You can create, read, update, and delete blog posts using this API. The API supports filtering posts based on search terms and provides a simple way to interact with blog data.

## Endpoints

### 1 -📝 Create a Blog Post

**POST** `/posts`

- **Request Body:**
  ```json
  {
    "title": "string",
    "content": "string",
    "tags": ["string"],
    "category": "string"
  }
 
 **Response:**
```
{
  "message": "blog created successfully"
}
```
**2- 📜 Get All Blog Posts GET /posts**

**Query Parameters:**

**term (optional):** Search term to filter posts
Response:

```
[
  {
    "id": "integer",
    "title": "string",
    "content": "string",
    "tags": ["string"],
    "category": "string",
    "createdAt": "ISO8601 string",
    "updatedAt": "ISO8601 string"
  }
]
```
**3- 📖 Get a Blog Post by ID GET /posts/:id**

**URL Parameters:**

**id:** The ID of the blog post
Response:

```
{
  "id": "integer",
  "title": "string",
  "content": "string",
  "tags": ["string"],
  "category": "string",
  "createdAt": "ISO8601 string",
  "updatedAt": "ISO8601 string"
}
```
**4- ✏️ Update a Blog Post PUT /posts/:id**

**URL Parameters:**

**id:** The ID of the blog post to update
Request Body:

```
{
    "object":{
  "title": "string",
  "content": "string",
  "tags": ["string"],
  "category": "string"
    }
}
```

**Response:**
```
{
  "message": "Blog updated successfully!"
}
```

**5- 🗑️ Delete a Blog Post DELETE /posts/:id**

**URL Parameters:**

**id:** The ID of the blog post to delete

**Response:**
```
{
  "message": "Blog deleted successfully!"
}
```
