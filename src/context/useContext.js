import { createContext, useReducer } from "react";
import reducer from "../reducer/reducer";
import lunchData from "../fackeData/lunch";

export const foodContext = createContext({});



const FoodProvider = ({children}) => {

  const [state,dispatch] = useReducer(reducer,{
    data :lunchData,
  })
  const value = {
    data:state.data,
    loadData:(url) =>{
      dispatch({type:"LOAD_DATA",payload:url})
    },
  }

 return <foodContext.Provider value={value}>
    {children}
  </foodContext.Provider>
}

export default FoodProvider;