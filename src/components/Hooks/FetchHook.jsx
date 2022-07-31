import React, { useState, useEffect } from 'react';

function usePostsData() {
    const [posts, setPosts] = useState([]);
    
    async function fetchPosts() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data);
            setPosts(data);
        } catch {
            console.log('there was an err');
        }
    }
    useEffect(() => {
        fetchPosts();
    }, []);
//has to return 
    return [posts]
};

export default usePostsData;