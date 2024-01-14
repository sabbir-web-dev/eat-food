import { Navigate } from "react-router-dom";
import useFoodContext from "../hook/useFoodHook";

const ProtectRoute = ({children}) => {
  const {user} = useFoodContext()
   if (user.signIn) {
     return children;
   } else {
     return <Navigate to="/login" replace />;
   }

}

export default ProtectRoute;
