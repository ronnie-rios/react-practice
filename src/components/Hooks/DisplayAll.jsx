import React from 'react';
import usePostsData from './FetchHook';

export default function DisplayAll() {
    const [posts] = usePostsData();

    return (
        <div>
            <h2>get all posts</h2>
            {posts.map((post) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    )
}
