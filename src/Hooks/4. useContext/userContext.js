import React from "react";

export const UserContext = React.createContext();

// Step1 : create context (here in userContext.js file)
// Step2 : wrap childs with context provider (component1 UserContext.provider)
// Step3 : state access useContext hook (Component3(child) receives the value)