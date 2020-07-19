import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        //if(action.type receive ADD_COMMENT action)
        // then this reducer function is supposed to do sth to the state
        case ActionTypes.ADD_COMMENT:
            var comment =  action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            //* we cannot modify the state that have been set already
            //but i can add to it and then returned the modified version
            return state.concat(comment);
            //concat is js function return new array
            //only add to memory now,
            default:
          return state;
      }
};