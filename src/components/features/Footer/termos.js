import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import LightBox from "../LightBox";
import config from "../../../config/constants";

function Termos() {
  const [terms, setTerms] = useState("");

  useEffect(() => {
    API.get(config.APIS.PLAYERSTARS_PUBLIC, "/terms-and-conditions", {})
      .then((response) => {
        setTerms(response.data[0].terms);
      })
      .catch((error) => {
        console.log("get terms falhou: ", error);
      });
  }, []);

  return (
    <LightBox link="Termos e Condições" btnText="Fechar">
      {<div dangerouslySetInnerHTML={{ __html: terms }}></div>}
    </LightBox>
  );
}

export default Termos;
