import { createContext, useReducer } from "react";
import reducer, { initialState } from "../reducer/reducer";

export const foodContext = createContext({});

const FoodProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = {
  data: state.data,
    foodPrice: state.foodPrice,
    menuData : state.menuData,
    selectData: state.selectData,
    loadData: (url) => {
      dispatch({ type: "LOAD_DATA", payload: url });
    },
    addCard:(data) => {
      dispatch({type:"ADD_CARD",payload:data})
    },
    setPrice: (price) => {
      dispatch({type:"ADD_PRICE",payload:price})
    }
    };

  return <foodContext.Provider value={value}>{children}</foodContext.Provider>;
};

export default FoodProvider;
