import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.css";

const Breadcrumbs = ({ currentPlaceName }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathSegments.map((segment, index) => {
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
        if (index === pathSegments.length - 1) {
          return (
            <span key={path}>
              {" > "}
              <span>{currentPlaceName}</span>
            </span>
          );
        } else if (segment !== "details") {
          return (
            <span key={path}>
              {" > "}
              <Link to={path}>{segment}</Link>
            </span>
          );
        }
        return null;
      })}
    </nav>
  );
};

export default Breadcrumbs;
