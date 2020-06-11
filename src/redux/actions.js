import { CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './types.js'

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}
export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}
export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}
export function showNotification(text) {
    return dispatch => {
        dispatch({
            type: SHOW_NOTIFICATION,
            payload: text
        })
        setTimeout(() => {
            dispatch(hideNotification())
        }, 3000)
    }
}
export function hideNotification() {
    return {
        type: HIDE_NOTIFICATION
    }
}
export function fetchedPosts(post) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const json = await response.json()
            dispatch({ type: FETCH_POSTS, payload: json })
            dispatch(hideLoader())
        } catch (e) {
            dispatch(showNotification('Что-то пошло не так'))
            dispatch(hideLoader())
        }
    }
}