import React, { useState, useEffect } from 'react'
import axios from 'axios'
function FetchingTheData_Axios() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                setPosts(response.data)
            }).catch(err => console.log(err));
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post =>

                        <li key={post.id}>{post.title}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default FetchingTheData_Axios
