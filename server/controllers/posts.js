import Post from "../models/Post.js";

import asyncHandler from "../utils/asyncHandler.js";
import errorResponse from "../utils/ErrorResponse.js";

export const createPost = asyncHandler(async (req, res, next) => {
  const { plantId, title, content, image, date } = req.body;
  const uid = req.uid;

  const post = await Post.create({
    plant: plantId,
    title,
    content,
    image,
    date,
    user: uid,
  });

  res.status(201).json(post);
});

export const getPostById = asyncHandler(async (req, res, next) => {
  const postId = req.params.id;

  const post = await Post.findById(postId).populate("user").populate("plant");

  if (!post) {
    return next(new ErrorResponse(`Post not found with ID ${postId}`, 404));
  }

  // if (post.user.toString() !== req.uid) {
  //   return next(
  //     new ErrorResponse("You have no permission to view this post", 401)
  //   );
  // }

  res.status(200).json(post);
});

export const updatePost = asyncHandler(async (req, res, next) => {
  const postId = req.params.id;
  const { title, content, image, date } = req.body;
  const uid = req.uid;

  const post = await Post.findById(postId);

  if (!post) {
    return next(new ErrorResponse(`Post not found with ID ${postId}`, 404));
  }

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    { title, content, image, date },
    { new: true, runValidators: true }
  );

  res.status(200).json(updatedPost);
});

// export const deletePost = asyncHandler(async (req, res, next) => {
//   const postId = req.params.id;
//   const uid = req.uid;
//   const post = await Post.findById(postId);

//   if (!post) {
//     return next(new ErrorResponse(`Post not found with ID ${postId}`, 404));
//   }

//   if (post.user.toString() !== uid) {
//     return next(
//       new ErrorResponse("You have no permission to delete this post", 401)
//     );
//   }

//   const deletedPost = await Post.findByIdAndDelete(id, body, {
//     new: true,
//   }).populate("user");
//   res.json({ success: `Post with ${id} was deleted` });
// });
export const deletePost = asyncHandler(async (req, res, next) => {
  const postId = req.params.id;
  const uid = req.uid;

  const post = await Post.findById(postId);

  if (!post) {
    return next(new ErrorResponse(`Post not found with ID ${postId}`, 404));
  }

  const deletedPost = await Post.findByIdAndDelete(postId).populate("user");

  res.json(deletedPost);
});
