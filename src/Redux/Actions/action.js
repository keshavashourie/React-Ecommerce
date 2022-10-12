export const ADD = (item) => {
    return{
            type : "ADD_CART",
            payload: item
        }
}


export const DLT = (id) => {
    return{
            type : "DEL_CART_ITEM",
            payload: id
        }
}


