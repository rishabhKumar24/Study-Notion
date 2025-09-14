import { Navigate, useNavigate } from "react-router-dom";
import React, { Children } from "react";
const PrivateRoute = ({isLoggedIn,children}) => {
    if (isLoggedIn) {
        return children;
    }
    else {
        return <Navigate to="/login" replace />;
    }
    
}



export default PrivateRoute;