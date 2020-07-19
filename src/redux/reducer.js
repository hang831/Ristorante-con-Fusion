/* 
No more need, because we put the into four sperate file

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initState = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
};
//pure function
//if state is undefined(by default when start), use initState
export const Reducer = (state = initState, action) => {
    return state;
};
//cannot modify the state directly in the reducer
//can do a immutable change only
//then return an updated version of the state from this reducer

*/