import { useContext } from "react";
import { createContext } from "react";

// context creation
const AppContext = createContext();

// provider
const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={"Aadi's news"}>{children}</AppContext.Provider>
  );
};

// useContext hook replaced consumer

// create custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
