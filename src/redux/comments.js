import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length; // because the state will be an array of comments
            comment.date = new Date().toISOString();
            return state.concat(comment); // not mutate the state but creates a new copy
        default: return state;
    }
}