import useAppState from "./hooks/useAppState";
import Searchbar from "./components/Searchbar";
import Content from "./components/Content";
import Spinner from "./components/Spinner";
import Portfolio from "./components/Content/PortFolio";
import "./Home.css";

const Home = ({}) => {
  
  const userd =sessionStorage.getItem('name');
  const userem = sessionStorage.getItem('email');
  const ammount =sessionStorage.getItem('ammount');

  const { symbolData, isLoading, handleSearch } = useAppState();

  return (
    <div id="App">
      <div id="header">
      <Searchbar id="sbar"  uname={userd} userem={userem} searchSubmit={handleSearch} />
     
      </div>
        

      <main>{isLoading ? <Spinner /> : <Content data={symbolData}   />}</main>
    
    </div>
  );
};

export default Home;
