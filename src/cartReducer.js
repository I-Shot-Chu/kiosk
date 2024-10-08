export const initialState = {
    cart: [],
    itemCounts: {}
  };
  
  export default function cartReducer(state, action) {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      case "REMOVE_ITEM":
        const newCart = state.cart.filter(menu => menu.menuCode !== action.payload);
        const { [action.payload]: _, ...newItemCounts } = state.itemCounts;
        return {
          ...state,
          cart: newCart,
          itemCounts: newItemCounts
        };
      case "UPDATE_COUNT":
        return {
          ...state,
          itemCounts: {
            ...state.itemCounts,
            [action.payload.menuCode]: action.payload.count
          }
        };
      default:
        return state;
    }
  }