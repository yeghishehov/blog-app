

export default function deletePost (thisPost, posts, setPost, coments, setComents) {

    const updatePosts = posts.filter(post => post.id !== thisPost.id)
    const updateComents = coments.filter(coment => coment.postId !== thisPost.id)

    localStorage.setItem('comentsStorage', JSON.stringify([...updateComents]));
    localStorage.setItem('postsStorage', JSON.stringify([...updatePosts]));
    
    setComents([...updateComents]);
    setPost([...updatePosts]);
    
}