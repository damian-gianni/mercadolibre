import { Fragment } from "react";
import SearchBox from "../SearchBox";
import "../../styles/styles.scss";

export default ({ children }) => {

  return (
    <>
      <header id="header">
        <SearchBox />
      </header>
      <main>{children}</main>
      <footer />
    </>
  );
};
