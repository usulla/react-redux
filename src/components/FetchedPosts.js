import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import Loader from './Loader'
import { fetchedPosts } from '../redux/actions';

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)
    if (loading) {
        return (
            <Loader />
        )
    }
    if (!posts.length) {
        return (
            <button className="btn btn-primary"
                onClick={() => dispatch(fetchedPosts())}>
                Загрузить
            </button>
        )
    }

    else {
        return posts.map(post => <Post post={post} key={post.id} />)
    }
}