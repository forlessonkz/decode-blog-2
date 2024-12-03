const axios = require('axios');

function deletePost(id, authorId) {
    axios.delete(`/api/posts/${id}`).then(data => {
        console.log(data)
    })
    console.log(id, authorId)
}