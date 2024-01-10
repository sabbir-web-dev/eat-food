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
    user: state.user,
    loadData: (url) => {
      dispatch({ type: "LOAD_DATA", payload: url });
    },
    addCard:(data) => {
      dispatch({type:"ADD_CARD",payload:data})
    },
    setPrice: (price) => {
      dispatch({type:"ADD_PRICE",payload:price})
    },
    getUser:(user) => {
      dispatch({type:"GET_USER",payload:user})
    },
    getSignUp:(signUp) => {
      dispatch({type:"GET_SIGN_UP",payload:signUp})
    }
    };

  return <foodContext.Provider value={value}>{children}</foodContext.Provider>;
};

export default FoodProvider;
