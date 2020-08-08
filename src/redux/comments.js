import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
    errMsg: null,
    comments: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMsg: null, comments: action.payload }
        
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMsg: action.payload, comments: []}
    
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return {...state, comments: state.comments.concat(comment)}; // not mutate the state but creates a new copy
        
        default: return state;
    }
}