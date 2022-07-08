import React, { useContext } from 'react';
import { fetchAllPosts, fetchSinglePost } from '../../context/ApiAction';
import ApiContext from '../../context/ApiContext';

export default function ReducerContext() {
    //call hook and place the context u create as a parameter
    const { dispatch, posts, loading } = useContext(ApiContext)

    const onClickHandler = async(e) => {
        //dispatch
        dispatch({ type:'SET_LOADING' })
        const posts = await fetchAllPosts()
        dispatch({ type: 'GET_POSTS', payload: posts })
    }
  return (
    <div>
        <h2>context practice</h2>
        <div>
            <h3>get all posts</h3>
            <button onClick={onClickHandler}>view posts</button>
            {!loading && posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.id}: {post.title}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}
