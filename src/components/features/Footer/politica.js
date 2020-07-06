import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import LightBox from "../LightBox";
import config from "../../../config/constants";

function Politica() {
  const [policy, setPolicy] = useState("");

  useEffect(() => {
    API.get(config.APIS.PLAYERSTARS_PUBLIC, "/privacy-policy", {})
      .then((response) => {
        setPolicy(response.data[0].privacy_policy);
      })
      .catch((error) => {
        console.log("get terms falhou: ", error);
      });
  }, []);

  return (
    <LightBox link="Políticas de Privacidade" btnText="Fechar">
      {<div dangerouslySetInnerHTML={{ __html: policy }}></div>}
    </LightBox>
  );
}
export default Politica;
