function sendComment () {
    const commentText = document.querySelector('#commentText').value
    const commet_author = document.querySelector('#commet_author').value
    const psot_id = document.querySelector('#psot_id').value

    if(commentText.length > 0) {
        axios.post('/api/send-comment', {
            comment: commentText, 
            userId: commet_author, 
            postId: psot_id
        });
    }
}





