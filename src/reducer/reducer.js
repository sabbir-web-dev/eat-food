const reducer = (state,action) => {
  switch (action.type) {
    case "LOAD_DATA":
    console.log('ji')
    return{
      ...state,
      data : action.payload
    }
  
    default:
      return state;
  }
}

export default reducer;