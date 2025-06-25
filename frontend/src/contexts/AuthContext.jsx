// // src/auth/AuthContext.jsx
// import {createContext, useState, useEffect, useContext} from "react";
// import axios from "../axios/axios";
// import {jwtDecode} from 'jwt-decode';
//
// const AuthContext = createContext();
//
//
// export const AuthProvider = ({children}) => {
//     const [authTokens, setAuthTokens] = useState(() =>
//         localStorage.getItem("tokens") ? JSON.parse(localStorage.getItem("tokens")) : null
//     );
//     const [user, setUser] = useState(() =>
//         localStorage.getItem("tokens") ? jwtDecode(localStorage.getItem("tokens")) : null
//     );
//
//     const login = async (username, password) => {
//         const response = await axios.post("/token/", {username, password});
//         setAuthTokens(response.data);
//         setUser(jwtDecode(response.data.access));
//         localStorage.setItem("tokens", JSON.stringify(response.data));
//     };
//
//     const logout = () => {
//         setAuthTokens(null);
//         setUser(null);
//         localStorage.removeItem("tokens");
//     };
//
//     const contextData = {user, authTokens, login, logout};
//
//     return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
// };

import React, {useContext} from "react";


const AuthContext = React.createContext(null);

export const useAuth = () => useContext(AuthContext);

export default AuthContext;