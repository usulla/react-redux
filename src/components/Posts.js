import React from 'react';
import Post from './Post';
import { connect } from 'react-redux'

const Posts = ({ syncPosts }) => {
    if (!syncPosts.length) {
        return <button className="btn btn-primary">Загрузить</button>
    }
    return syncPosts.map(post => <Post post={post} id={post} key={post.id} />)
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts)