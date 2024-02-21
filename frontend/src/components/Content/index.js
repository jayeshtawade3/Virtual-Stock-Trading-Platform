import Quote from "./Quote";
import React,{useState,useEffect} from "react"
// import Stats from "./Stats";
import DataChart from "./DataChart";
// import Company from "./Company";
// import News from "./News";
import Portfolio from "./PortFolio";
import { FaArrowUp } from 'react-icons/fa';
import Error from "./Error";

import "./style.css";


const Content = ({ data}) => {
  const [invested,setinvested]=useState(0);
  
   const [ammount,setammount]=useState(sessionStorage.getItem("ammount"));
   
  const { quote, company } = data;

  const [ammounttobuy,setammounttobuy]=useState();

  const [boughtItems,setBoughtItems] = useState([]);

  const handleBuy=()=>{
    
    const newboughtprice=ammounttobuy*quote.latestPrice;
    const newcompanyname = quote.companyName;
    const newboughtitem ="  +  "+newcompanyname+" "+newboughtprice;
    if (newboughtprice > ammount){
      alert("Not enough money");
    }
    else{
      setBoughtItems([...boughtItems,newboughtitem]);
      setinvested(invested+ammounttobuy);
      const value = ammount - newboughtprice;
      const roundedValue = parseFloat(value).toFixed(2);
      setammount(roundedValue);
    }
    
    console.log("buying");
  }
  const handleSell=()=>{
    const newsellprice =ammounttobuy*quote.latestPrice;
    const newcompanyname = quote.companyName;
   const sellingPrice = parseFloat(ammounttobuy*quote.latestPrice);
   const newsolditem ="  -  "+newcompanyname+" "+newsellprice;
    if(ammounttobuy<=invested){
      const newinvested=invested -ammounttobuy;
      setinvested(newinvested);
      setBoughtItems([...boughtItems,newsolditem]);
      
      const value1 = parseFloat(ammount) + sellingPrice;
    
      const roundedValue = parseFloat(value1).toFixed(2);
      setammount(roundedValue);
    }
    else{
      alert("You dont have Stocks to sell;")
    }
    console.log("Selling");
  }
  const handleAmmounttobuyChange =(event)=>{
    setammounttobuy(parseInt(event.target.value,10)||0);
  }

  // console.log(quote.latestPrice);
  const hideMissingLogo = () => {
    const logo = document.querySelector(".company-logo");
    logo.style.display = "none";
  };

  
  
  if (data.error) return <Error data={data} />;

  return (
    <>
    <div id="main">
      <div className="main-header">
      
        <div className="company-logo">
          <img
            src={`https://logo.clearbit.com/${company.website}`}
            alt={`${quote.companyName} logo`}
            onError={() => hideMissingLogo()}
          />
        </div>
        <div>
          <h1 className="main-title">{quote.companyName}</h1>
          <p>{`${quote.symbol} | ${quote.primaryExchange}`}</p>
        </div>
        
      </div>
      
      <div className="main-item first">
        
        <Quote data={quote} />
        
        {/* <Stats data={quote} /> */}
      </div>
    
      

      </div>
    
      <div className="main-item">
        <DataChart data={data["intraday-prices"]} priceChange={quote.change} />
        
        <div id="rightsec">
          <div id="portfolio">
            <p id="amm">Ammount: {ammount}</p> 
            <ul>
              {boughtItems.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div id="buysell">
            <button id="bs" onClick={handleBuy}>Buy</button>
            <input id='bs' type="number" placeholder="Quantity" value={ammounttobuy} onChange={handleAmmounttobuyChange}></input>
            <button id="bs" onClick={handleSell}>Sell</button>
          </div>
          
          
      </div>
      <div id="portfolio"></div>
      </div>
      
    </>
  );
};

export default Content;
