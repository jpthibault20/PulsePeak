import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ 
    mail: "", 
    password: "", 
    lastname: "", 
    firstname: "", 
    gender: "", 
    hight: "", 
    weight: "",
    coach_mode: "",
    goal: "",
    sport: "",
    distance: "",
    type: ""
  });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider> 
  );
};

export default AuthContext;
