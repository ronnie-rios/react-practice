import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
export default function AllPosts() {
  const [posts, setPosts] = useState()

  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    setPosts(data)
  }
  useEffect(()=>{
    fetchPosts()
  }, [])
    
  return (
    <div>
        <h3>view all posts</h3>
        {posts && <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h4>Post {post.id}: {post.title}</h4>
                    <Link to={`/${post.id}`}>
                        <button>view post details</button>
                    </Link>
                </div>
            ))}
        </div> }
    </div>
  )
}
