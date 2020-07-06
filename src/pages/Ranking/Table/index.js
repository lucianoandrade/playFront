import React from "react";
import avatar from "../../../assets/icons/avatar-ranking.png";
import trofeu from "../../../assets/icons/torneios.svg";
import "./styles.scss";

const Card = ({ item, category }) => {
  return (
    <div
      className={`cardRanking ${category === "Meus times" ? "" :
        (item.is_himself || item.is_member) && "selected"
      }`}
    >
      <div className="content">
        <span className="position">{item.position}º</span>
        <div className="arcoAvatar">
          <img
            className="avatar"
            src={item.profile_image || item.team_logo || avatar}
            alt="Avatar"
          />
        </div>
        <span className="nickname">{item.user_name || item.team_name}</span>
      </div>

      <span className="victories">
        {item.victories}
        {item.position < 4 ? <img src={trofeu} alt="Icone de trofeu" /> : ""}
      </span>
    </div>
  );
};

const Table = ({ ranking, category }) => {
  return (
    <aside className="tableRanking">
      <div className="header">
        <span className="title">Nome</span>
        <span className="title">Pontos</span>
      </div>
      {ranking.map((item, index) => (
        <Card key={index} item={item} category={category}/>
      ))}
    </aside>
  );
};

export default Table;
