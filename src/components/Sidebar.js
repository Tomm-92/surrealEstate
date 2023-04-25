import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import qs from "qs";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { search } = useLocation();

  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || "{}"),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const newQueryString = buildQueryString("query", {
      title: { $regex: query },
    });
    navigate(newQueryString);
  };
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <Link
          className="sidebar-links-item"
          to={buildQueryString("query", { city: "Liverpool" })}
        >
          Liverpool
        </Link>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("query", { city: "Manchester" })}
        >
          Manchester
        </Link>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("query", { city: "Sheffield" })}
        >
          Sheffield
        </Link>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("query", { city: "Leeds" })}
        >
          Leeds
        </Link>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("sort", { price: 1 })}
        >
          Sort - Ascending
        </Link>
        <Link
          className="sidebar-links-item"
          to={buildQueryString("sort", { price: -1 })}
        >
          Sort - Descending
        </Link>
      </ul>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          value={query}
          placeholder="Search for a property"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-form__submit-button">
          Search!
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
