import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { response } from 'express'
function FetchingIndividualPostWithUserInput() {
    const [post, setPost] = useState({})
    const [post_id, setPostId] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}`).then(response => setPost(response.data))
    }, [post_id])
    return (
        <div>
            <input type="text"
                onChange={event => setPostId(event.target.value)} />
            <p>{post}</p>

        </div>
    )
}

export default FetchingIndividualPostWithUserInput
