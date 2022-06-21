import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function SinglePost() {
  const [post, setPost] = useState()
  const params = useParams()
  const id = params.id
  
  const fetchSinglePost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()
    setPost(data)
  }
  useEffect(()=>{
    fetchSinglePost()
  },[])

  return (
    <div>
        {post && 
            <div>
                <h3>{post.id}: {post.title}</h3>
                <p>{post.body}</p>
            </div>
        }
    </div>
  )
}
