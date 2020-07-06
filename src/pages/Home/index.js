import React from "react";

import "../../styles/normalize.scss";
import "../../styles/base.scss";

import Banner from "../../components/features/Header/Banner";
import SobreDescricao from "../../components/features/SobreHome/SobreDescricao";
import SobreDesafios from "../../components/features/SobreHome/SobreDesafios";
import SobreJogos from "../../components/features/SobreHome/SobreJogos";
import PageContainer from "../../components/features/PageContainer";
import logo from "../../assets/images/logo.svg";

import imgBanner from "../../assets/images/home-1280.png";

function Home () {
    const contentBanner = "A Vitória só depende de Você!";
    return (
      <PageContainer public={true}>
        <Banner imagemBanner={imgBanner} imagem={logo} text={contentBanner} />
        <SobreDescricao />
        <SobreDesafios />
        <SobreJogos />
      </PageContainer>
    );
}

export default Home;
