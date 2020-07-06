import React from "react";

import Sucesso from "../../../assets/icons/sucesso.png";
import Erro from "../../../assets/icons/erro.png";

import "./styles.scss";

const AlertTemplate = ({ message, options }) => {
  const _menssage = message;
  const _options = options;
  return (
    <>
      <div className="fundo"></div>
      <div className="boxAlert">
        <img
          className="icone"
          src={_options.type === "error" ? Erro : Sucesso}
          alt="icone de Status"
        />
        {_menssage}
      </div>
    </>
  );
};

export default AlertTemplate;
