/* eslint-disable react/prop-types */
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const saveUserData = () => {
    const encodedToken = localStorage.getItem("userToken");
    const decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
  };

  //  solve reload page
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
