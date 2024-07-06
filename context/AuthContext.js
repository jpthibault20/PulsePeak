import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ 
    email: "", 
    password: "", 
    lastname: "", 
    firstname: "", 
    gender: "", 
    height: "", 
    weight: "", 
    coach_mode: "",
    goal: "",
    sport: "",
    distance: "",
    goal_type: ""
  });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
