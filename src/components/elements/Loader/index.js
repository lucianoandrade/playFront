import React from "react";

import loader from "../../../assets/icons/loader.svg";

import "./styles.scss";

const Loader = () => (
  <div className="loaderPlay">
    <img src={loader} alt="loading" className="loadingPlay" />
  </div>
);

export default Loader;
