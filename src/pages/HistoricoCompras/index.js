import React, { Component } from 'react'
import { API } from "aws-amplify";
import config from '../../config/constants';
import Card from './Card/index';
import PageContainer from "../../components/features/PageContainer"
import Loader from '../../components/elements/Loader/index'

import './styles.scss';

function RenderLoading() {
    return (
        <div className="Loading">
            <Loader />
        </div>
    )
}

class ComponentHistoricoCompras extends Component {

    state = {
        history: [],
        isLoading: true
    }

    componentDidMount() {
        this.getHistorico()
    }

    getHistorico = () => {
        API.get(config.APIS.PLAYERSTARS, '/purchase/history')
            .then(response => {
                console.log("RESULTADO DO GET: ", response.data)
                this.setState({
                    history: response.data,
                    isLoading: false
                })
            })
            .catch(error => {
                console.log("ERRO NO GET: ", error)
            })
    }

    render() {

        if (this.state.isLoading) {
            return <RenderLoading />
        }

        return (
            <PageContainer public={false}>
            <section className="containerHistoricoCompras">
                <h1 className="titleHistorico">Histórico de Compra</h1>
                {this.state.history.map((purchase, index) => <Card
                    key={index}
                    price={purchase.product.price}
                    starType={purchase.product.star_type}
                    starValue={purchase.product.star_value}
                    status={purchase.payment.transactions[0].status}
                    date={purchase.purchase_datetime}
                    payment={purchase.payment.payment_type}
                    duration={purchase.product.duration}
                />)}
            </section>
            </PageContainer>
        )
    }
}

export default ComponentHistoricoCompras;