export const cartInitialState = {
  items: [{ id: 1, amount: 1 }],
  totalAmount: 0,
  totalPrice: 0,
};

export const cartActions = {
  addToCart: 'ADD_TO_CART',
  subtractFromCart: 'SUBTRACT_FROM_CART',
  removeFromCart: 'REMOVE_FROM_CART',
};

const countTotalAmount = (items) => {
  let newTotalAmount = 0;
  items.forEach((item) => {
    newTotalAmount += item.amount;
  });

  return newTotalAmount;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { itemId, amount } = action.payload;

      const newItems = [...state.items];

      const foundInCartIdx = newItems.findIndex((item) => item.id === itemId);

      if (foundInCartIdx > -1) {
        const currentItemAmount = newItems[foundInCartIdx].amount;
        newItems[foundInCartIdx] = {
          ...newItems[foundInCartIdx],
          amount: currentItemAmount + amount,
        };
      } else {
        newItems.push({ id: itemId, amount: amount });
      }

      const totalAmount = countTotalAmount(newItems);

      return { ...state, items: [...newItems], totalAmount };
    }

    case 'SUBTRACT_FROM_CART': {
      const { itemId, amount } = action.payload;

      let newItems = [...state.items];

      const foundInCartIdx = newItems.findIndex((item) => item.id === itemId);

      if (foundInCartIdx > -1) {
        const currentAmount = newItems[foundInCartIdx].amount;
        newItems[foundInCartIdx] = {
          ...newItems[foundInCartIdx],
          amount: currentAmount - amount,
        };

        if (newItems[foundInCartIdx].amount <= 0) {
          newItems = newItems.filter((item) => item.id !== itemId);
        }
      }

      const totalAmount = countTotalAmount(newItems);

      return { ...state, items: newItems, totalAmount };
    }

    case 'REMOVE_FROM_CART': {
      const { itemId } = action.payload;

      const newItems = state.items.filter((item) => item.id !== itemId);

      const totalAmount = countTotalAmount(newItems);

      return { ...state, items: newItems, totalAmount };
    }

    default:
      throw new Error();
  }
};

export default cartReducer;
