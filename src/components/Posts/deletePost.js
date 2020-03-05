
export default function deletePost (thisPost, posts, setPost, comments, setComments) {
  const updatePosts = posts.filter(post => post.id !== thisPost.id);
  const updateComments = comments.filter(comment => comment.postId !== thisPost.id);

  localStorage.setItem("commentsStorage", JSON.stringify([...updateComments]));
  localStorage.setItem("postsStorage", JSON.stringify([...updatePosts]));

  setComments([...updateComments]);
  setPost([...updatePosts]);
}
