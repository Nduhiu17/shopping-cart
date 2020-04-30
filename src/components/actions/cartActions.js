
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,FETCH_ITEMS} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

//get items
export const fetchItems = () => dispatch =>{
    fetch('https://yummypizza.herokuapp.com/api/pizzas',{ method: "GET",headers: { "Content-Type": "application/json;charset=UTF-8"}})
        .then(res => res.json())
        .then(goods => dispatch({
                type:FETCH_ITEMS,
                payload:goods.data
            })
        );
}
