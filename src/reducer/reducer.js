import lunchData from "./../fackeData/lunch";
import fakeData from "./../fackeData/index";
import { auth } from "../firebase/firebase";

export const initialState = {
  data: fakeData,
  menuData: lunchData,
  selectData: [],
  foodPrice: 0,
  user: {
    signIn: false,
    signUp: false,
    name: "",
    email: "",
    img: "",
  },
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
      const selectFilter =
        fakeData && fakeData.filter((data) => data.key === action.payload);
      const updatedSelect = [
        ...new Set([...state.selectData, selectFilter[0]]),
      ];
      return {
        ...state,
        selectData: updatedSelect,
      };

    case "ADD_PRICE":
      return {
        ...state,
        foodPrice: state.foodPrice + action.payload,
      };

    case "GET_USER":
      const user = auth.currentUser;
      if (user) {
        const { displayName, email, photoURL } = user;
        const userName = displayName || " ";
        const userEmail = email || " ";
        const userPhoto = photoURL || null;

        return {
          ...state,
          user: {
            ...state.user,
            name: userName,
            email: userEmail,
            img: userPhoto,
            signIn: action.payload,
          },
        };
      } else {
        return {
          ...state,
          user: {
            ...state.user,
            name: " ",
            email: " ",
            img: null,
            signIn: action.payload,
          },
        };
      }
    case "GET_SIGN_UP":
      return {
        user: { ...state.user, signUp: action.payload },
      };
    default:
      return state;
  }
};

export default reducer;
