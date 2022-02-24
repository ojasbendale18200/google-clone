import React, { createContext, useContext, useReducer } from "react";

//Preparing the data layer
export const StateContext = createContext();

//reducer - listen for the changes
//initialState - What that data layer looks like when the app is loaded
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Hook which allow us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);
