import React, {Component} from 'react'
import Header from "../components/features/Header/Menu"
import Footer from "../components/features/Footer"
import {withRouter} from "react-router-dom"


class Error extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div style={{height: "800px"}}>
        <h2 style={{textAlign: "center", marginTop: "200px"}}>
          {this.props.history.location.state.message}
        </h2>
        </div>
        <Footer/>
      </React.Fragment>
    )
  };
}

export default withRouter(Error)