import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";

let API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: [],
  isLoading: true,
};

// context creation
const AppContext = createContext();

// provider
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAPiData = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
      //   isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPiData(`${API}query=${state.query}&page=${state.page}`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// useContext hook replaced consumer

// create custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
