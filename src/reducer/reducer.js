import lunchData from "./../fackeData/lunch";
import fakeData from "./../fackeData/index";

export const initialState = {
  data: fakeData,
  menuData: lunchData,
  selectData:[],
  foodPrice:0
};

const reducer = (state, action) => {
  switch (action.type) {
    
    case "LOAD_DATA":
      const filterMenu =
        state.data &&
        state.data.filter((data) => data.category === action.payload);
      return {
        ...state,
        menuData: filterMenu,
      };

    case "ADD_CARD":
      const selectFilter = fakeData && fakeData.filter((data) => data.key === action.payload);
        const updateselect = [...new Set([...state.selectData,selectFilter[0]])]
      return {
        ...state,
       selectData : updateselect
      };

    case "ADD_PRICE":
      console.log(state.foodPrice,state.selectData)
      return {
        ...state,
        foodPrice : state.foodPrice + action.payload
      };

    default:
      return state;
  }
};

export default reducer;
