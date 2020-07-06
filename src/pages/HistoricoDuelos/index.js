import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import config from "../../config/constants";
import PageContainer from "../../components/features/PageContainer";
import Card from "./Card/index";
import Loader from "../../components/elements/Loader";
import Select from "../../components/elements/Select";

import "./styles.scss";

function ComponentHistoricoDuelos() {
  const [historico, setHistorico] = useState([]);
  const [statusSelected, setStatusSelected] = useState("");
  const [historicoInitial, setHistoricoInitial] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHistory();
    // eslint-disable-next-line
  }, []);

  const getHistory = () => {
    API.get(config.APIS.PLAYERSTARS, "/duel/get-my-duels/FINISHED_BY_VICTORY-UNDER_REVIEW-FINISHED_BY_TIE")
      .then((response) => {
        console.log("ESSE É O RESPONSE DO HISTORY: ", response.data);
        setHistorico(response.data);
        setHistoricoInitial(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log("ERRO NO GET: ", error);
        setHistorico([]);
        setLoading(false)
      });
  };

  let options = [
    { label: "Todos", value: "all" },
    { label: "Finalizados", value: `${'FINISHED_BY_VICTORY' ||'FINISHED_BY_TIE' }`},
    { label: "Em aberto", value: "UNDER_REVIEW" },
  ];

  const changeStatus = (e) => {
    setStatusSelected(e.label);
    setHistorico(
      historicoInitial.filter((item) => {
        switch (e.value) {
          case "FINISHED_Y_VICTORY": 
            return item.status === "FINISHED_BY_VICTORY";
          case "FINISHED_BY_TIE":
            return item.status === "FINISHED_BY_TIE";
          case "UNDER_REVIEW":
            return item.status === "UNDER_REVIEW";
          default:
          return item;
        }
      })
    );
  };

  return (
    <PageContainer public={false}>
      {loading ? <Loader/> :
        <section className="containerHistorico">
          <h1 className="titleHistorico">MEUS DUELOS</h1>
          <div className="containerFilter">
            <div className="containerSelects">
              <div className="containerSelect">
                <Select
                  onChange={changeStatus}
                  width={"150px"}
                  placeholder={statusSelected ? statusSelected : "Todos"}
                  options={options}
                  classNames={"select-class"}
                  name="statusDuel"
                />
              </div>
            </div>
          </div>
          {historico.find(item => item.status === "FINISHED_BY_VICTORY" || "UNDER_REVIEW" || "FINISHED_BY_TIE") ? (
            historico.map((item, index) => (
              <Card
                key={index}
                imageGame={item.gameImage}
                nomeGame={item.gameName}
                platform={item.consoleName}
                matchType={item.matchType}
                matchTitle={item.matchTitle}
                date={item.start_date_time}
                duration={item.durationMax}
                bet={item.bet}
                premium={item.reward}
                members={item.members}
                ranking={item.ranking}
                match={item.match}
                starType={item.star_type}
                winner={item.winner}
                opponentName={item.opponent_name}
                opponentType={item.opponent_type}
                status={item.status}
              />
            ))
          ) : (
            <div className="descriptionDuels">
              {
                statusSelected === "Em aberto" ?
                <p>Você não possui duelos em aberto.</p> 
                :
                <>
                <p>Você ainda não duelou!</p><br/>
                <p>Depois que enfrentar oponentes no app, os
                duelos dos quais tiver participado aparecerão aqui.</p>
                </>
              }
            </div>
          )}
        </section>
      }
    </PageContainer>
  );
}

export default ComponentHistoricoDuelos;
