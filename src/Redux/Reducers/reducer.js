const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, actions) => {
  switch (actions.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (e) => e.id === actions.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty +=1
        //console.log(itemid);
        return {
          ...state,
          carts: [...state.carts],
        };
      } else{
        const temp = {...actions.payload,qnty:1}
         return {
            ...state,
            carts: [...state.carts, temp]
        }
      }
    case "DEL_CART_ITEM":
      console.log(...state.carts);
      const data = state.carts.filter((el) => el.id !== actions.payload);
      console.log(data);
      return {
        ...state,
        carts: data,
      };
    default:
      return state;
  }
};
