import React from "react";
import Iframe from "react-iframe";
import Banner from "../../components/features/Header/Banner";
import PageContainer from "../../components/features/PageContainer";
import imgBanner from "../../assets/images/como-funciona-1280.png";
import iconDownload from "../../assets/images/google-play-badge.png";

import "./styles.scss";

function ComoFunciona() {
  const contentBanner = "Aperte o play e saiba como desafiar, duelar e conquistar";
  return (
    <PageContainer public={true}>
      <Banner imagemBanner={imgBanner} text={contentBanner} />
      <section className="containerComoFunciona">
        <div className="contentComoFunciona">
          <div className="headerComoFunciona">
            <h1>Como funciona</h1>
            <p>
              Novo por aqui? Assista ao vídeo abaixo sobre como funciona o nosso
              app e saiba como conquistar o universo dos games e ganhar na vida
              real tanto nas modalidades Gold Star e Red Star!
            </p>
            <img
              className="image"
              src={iconDownload}
              alt="Icon Download Google Play"
            />
          </div>
          <div className="containerVideo">
            <Iframe
              className="iFrame"
              title="Video Como Funciona"
              src="https://www.youtube.com/embed/SXMzfVInOaA"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </PageContainer>
  );
}

export default ComoFunciona;
