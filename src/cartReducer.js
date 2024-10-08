export const initialState = {
    cart: [],
    itemCounts: {}
  };
  
  export function cartReducer(state, action) {
    switch (action.type) {
      case "ADD_ITEM":
        return {
          ...state,
          cart: [...state.cart, action.payload],
          itemCounts: {
            ...state.itemCounts,
            [action.payload.menuCode]: 1
          }
        };
      case "REMOVE_ITEM":
        const { [action.payload]: _, ...newItemCounts } = state.itemCounts;
        return {
          ...state,
          cart: state.cart.filter(menu => menu.menuCode !== action.payload),
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