export default function deleteComment (thisComment, comments, setComments) {
  const updateComments = comments.filter(comment => comment.id !== thisComment.id);

  localStorage.setItem("commentsStorage", JSON.stringify([...updateComments]));

  setComments([...updateComments]);
}
