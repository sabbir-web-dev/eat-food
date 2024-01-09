import { useContext } from "react"
import { foodContext } from "../context/useContext"

const useFoodContext = () => {
  return useContext(foodContext);
}

export default useFoodContext;