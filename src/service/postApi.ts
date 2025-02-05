import { Post } from "../models/Post";
import axiosInstance from "./axiosConfig";

// Get Posts
export const getPosts = async () => {
  return await axiosInstance.get<Post[]>("/Post");
};
// Get Post by User Id
export const getPostsByUserId = async (userId: string) => {
    const response = await axiosInstance.get<Post[]>("/Post");
    const posts: Post[] = response.data.filter(post => post.userId === userId);
    return posts;
  };

// Get Post by Id
export const getPostById = async (postId: string) => {
  const response = await axiosInstance.get<Post>(`/Post/${postId}`);
  return response;
};

// Add Post
export const createPost = async (postData: Post) => {
  return axiosInstance.post("/Post", postData);
};

// Update Post
export const updatePost = async (postId: string, postData: Post) => {
  return axiosInstance.put(`/Post/${postId}`, postData);
};

// Delete Post
export const deletePost = async (postId: string, userId: string) => {
  return axiosInstance.delete(`/User/${userId}/Post/${postId}`);
};