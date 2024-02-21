import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import useWindowPosition from "../../hooks/useWindowPosition";
import "./style.css";

const Searchbar = ({ searchSubmit,uname ,userem}) => {
  const scrollPosition = useWindowPosition();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchSubmit(searchTerm);
    setSearchTerm("");
  };

  return (
    <header
      id="header"
      className={`${scrollPosition > 25 ? "header-sticky" : ""}`}
    >
      <div className="header__inner">
        <form id="formid"action="" onSubmit={(e) => handleSubmit(e)}>
          <div id="formdiv">
            <input id="forminput"
              type="text"
              placeholder="Search by ticker symbol..."
              title=""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
              required
            />
            <button
              type="submit"
              className="search-btn"
              aria-label="Submit search"
            >
              <FaSearch className="search-icon" />
            </button>
            
          </div>
          <h3>{uname}</h3>
          <h4>{userem}</h4>
        </form>
        
      </div>
    </header>
  );
};

export default Searchbar;
