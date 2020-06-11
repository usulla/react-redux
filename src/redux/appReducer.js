import { SHOW_LOADER, HIDE_LOADER, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./types"

const initialState = {
    loading: false,
    notification: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true }
        case HIDE_LOADER:
            return { ...state, loading: false }
        case SHOW_NOTIFICATION:
            return { ...state, notification: action.payload}
        case HIDE_NOTIFICATION:
            return { ...state, notification: null }
        default: return state
    }
}