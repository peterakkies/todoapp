import React from "react";
import FilterLink from "../containers/FilterLink";

const Footer = () => {
  return (
    <div>
      Show: <FilterLink filter="active">Active</FilterLink>{" "}
      <FilterLink filter="completed">Completed</FilterLink>{" "}
      <FilterLink filter="all">All</FilterLink>
    </div>
  );
};

export default Footer;
