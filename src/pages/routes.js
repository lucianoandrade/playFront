import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Cadastro from "./InicioDoCadastro";
import Login from "./Login";
import EsqSenha from "./EsqSenha";
import CodConfirm from "./CodConfirmacao";
import CadastroConsole from "./Consoles";
import DadosUser from "./DadosUsuario";
import TermosCadastro from "./Termos";
import NovaSenhaDoUsuario from "./NovaSenha";
import SobreStars from "./SobreStars";
import Contato from "./Contato";
import Regras from "./Regras";
import HistoricoDuelos from "./HistoricoDuelos";
// import HistoricoCompras from './HistoricoCompras';
import Perfil from "./PerfilUsuario";
import EditarPerfil from "./EditarPerfil";
import EditarConsoles from "./EditarConsoles";
import ComoFunciona from "./ComoFunciona";
import Ranking from "./Ranking";
import ConverterStars from "./Converter";
import Erro from "./Error";
import Logout from "./Logout";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/codigo-de-confirmacao" component={CodConfirm} />
      <Route path="/console" component={CadastroConsole} />
      <Route path="/seus-dados" component={DadosUser} />
      <Route path="/termos" component={TermosCadastro} />
      <Route path="/nova-senha" component={NovaSenhaDoUsuario} />
      <Route path="/esqueci-senha" component={EsqSenha} />
      <Route path="/sobre-stars" component={SobreStars} />
      <Route path="/contato" component={Contato} />
      <Route path="/regras" component={Regras} />
      <Route path="/historico-de-duelos" component={HistoricoDuelos} />
      {/* <Route path="/historicocompras" component={HistoricoCompras} /> */}
      <Route path="/perfil" component={Perfil} />
      <Route path="/editar-perfil" component={EditarPerfil} />
      <Route path="/editar-consoles" component={EditarConsoles} />
      <Route path="/como-funciona" component={ComoFunciona} />
      <Route path="/ranking" component={Ranking} />
      <Route path="/converter-stars" component={ConverterStars} />
      <Route path="/error" component={Erro} />
      <Route path="/logout" component={Logout} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
