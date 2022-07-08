//create reducer

const apiReducer = (state, action) => {
    //reducer takes in two arguemnts, state, action
    switch (action.type) {
        //when this action gets dispatched will return that state
        case 'GET_POSTS':
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case 'GET_SINGLE_POST':
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        case 'GET_COMMENTS':
            return {
                ...state,
                comments: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state

    }
}
export default apiReducer