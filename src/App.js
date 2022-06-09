
import { useGlobalContext } from "./context";
import Pagination from "./Pagination";
import Search from "./Search";
import Stories from "./Stories";


const App = () => {

  const data = useGlobalContext();

  return (
    <>
      <div>Welcome to Aadi's news Website {data}</div>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default App;
