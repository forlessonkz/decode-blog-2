

function deletePost(id, authorID) {
    axios.delete(`/api/posts/${id}`).then(data => {
        if(data.status = 200) {
            location.replace(`/profile/${authorID}`)
        } else if (data.status == 404) {
            location.replace('/not-fownd')
        }
    })
    console.log(id, authorID)
}