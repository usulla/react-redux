import React from 'react';
import { connect } from 'react-redux'
import { createPost } from '../redux/actions.js'
import { Notification } from './Notification'
import { showNotification } from '../redux/actions';

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            notification: false
        }
    }
    changeInputHandler = event => {
        event.persist();
        this.setState(prev => ({
            ...prev, ...{ [event.target.name]: event.target.value }
        }))
    }
    submitHandler = event => {
        event.preventDefault();
        const { title } = this.state
        if (!title.trim()) {
            return this.props.showNotification('Название поста не может быть пустым')
        }
        const newPost = {
            title,
            id: Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({ title: '' })
    }
    render() {
        return (
            <>
                <form onSubmit={this.submitHandler} >
                    {this.props.notification && <Notification text={this.props.notification} />}
                    <div className="form-group">
                        <label htmlFor="title">Email address</label>
                        <input
                            value={this.state.title}
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            onChange={this.changeInputHandler} />
                    </div>
                    <button type="submit" className="btn btn-success">Создать</button>
                </form >
            </>
        )
    }
}
const mapDispatchToProps = {
    createPost, showNotification
}
const mapStateToProps = state => ({
    notification: state.app.notification
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)