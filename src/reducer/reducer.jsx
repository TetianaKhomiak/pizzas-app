import { calcTotlaItems, calcTotlaPrice } from "../utils.jsx";

export const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PIZZA":
      const isExist = state.items.find((item) => item.id === action.payload.id);

      if (!isExist) {
        const newStateItems = [
          ...state.items,
          {
            ...action.payload,
            qty: 1,
            totalPriceOfItem: action.payload.unitPrice,
          },
        ];
        return {
          items: newStateItems,
          totalItems: calcTotlaItems(newStateItems),
          totalPrice: calcTotlaPrice(newStateItems),
        };
      } else {
        const updatedItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              qty: item.qty + 1,
              totalPriceOfItem: item.unitPrice * (item.qty + 1),
            };
          }
          return item;
        });

        return {
          items: updatedItems,
          totalItems: calcTotlaItems(updatedItems),
          totalPrice: calcTotlaPrice(updatedItems),
        };
      }

    case "DELETE_PIZZA":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        items: filteredItems,
        totalItems: calcTotlaItems(filteredItems),
        totalPrice: calcTotlaPrice(filteredItems),
      };

    case "INCREMENT_PIZZA":
      const updatedItemIncrement = state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            qty: item.qty + 1,
            totalPriceOfItem: item.unitPrice * (item.qty + 1),
          };
        }
        return item;
      });
      return {
        items: updatedItemIncrement,
        totalItems: calcTotlaItems(updatedItemIncrement),
        totalPrice: calcTotlaPrice(updatedItemIncrement),
      };

    case "DECREMENT_PIZZA":
      const updatedItemDecrement = state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            qty: item.qty > 1 ? item.qty - 1 : item.qty,
            totalPriceOfItem:
              item.qty > 1
                ? item.unitPrice * (item.qty - 1)
                : item.unitPrice * item.qty,
          };
        }
        return item;
      });
      return {
        items: updatedItemDecrement,
        totalItems: calcTotlaItems(updatedItemDecrement),
        totalPrice: calcTotlaPrice(updatedItemDecrement),
      };
    case "RESET_PIZZA":
      const updatedItemReset = state.items.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            qty: 1,
            totalPriceOfItem: 1,
          };
        }
        return item;
      });
      return {
        items: updatedItemReset,
        totalItems: calcTotlaItems(updatedItemReset),
        totalPrice: calcTotlaPrice(updatedItemReset),
      };

    case "CLEAR_CART":
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
};
