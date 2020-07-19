import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes'; //cap from dishes.js (use thunk)
export const addComment = (dishId, rating, author, comment) => ({

    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});
//(action) here is a thunk which return a function instead object
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout( () => {
        dispatch(addDishes(DISHES));
    }, 1000) 
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});