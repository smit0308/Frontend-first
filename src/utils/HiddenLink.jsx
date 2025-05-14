import React from 'react';
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../redux/features/authSlice"

// This file is now named HiddenLink.jsx and contains JSX syntax.
// Update any imports accordingly.

const HiddenLink = ({ isLoggedIn, children }) => {
    if(isLoggedIn){
        return <>{children}</>;
    }
    return null;
};

const ShowOnLogin = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) {
        return <>{children}</>;
    }
    return null;
};

const ShowOnLogout = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if(!isLoggedIn){
        return <>{children}</>;
    }
    return null;
};

export { HiddenLink, ShowOnLogin, ShowOnLogout };
