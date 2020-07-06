import React, {Component} from 'react';
import PageContainer from "../components/features/PageContainer";
import {Auth} from "aws-amplify";
import {Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import { removeUserData } from '../store/actions/user.action';
class Logout extends Component {
  state = {logged_out: false}

  componentDidMount() {
    Auth.signOut()
      .then(response => {
        this.setState({logged_out: true})
        this.props.removeUserData();       
      })
      .catch(error => {
        console.log("Erro fazendo logout: ", error)
        this.setState({logged_out: true})
      })
  }

  render() {
    if(this.state.logged_out) {
      return <Redirect to="/"/>
    }
    else {
      return (
        <PageContainer public={true}>
          <h1>Saindo...</h1>
        </PageContainer>
      )
    }
  };
}

export default connect(
  null,
  {
    removeUserData,
  }
)(Logout)
