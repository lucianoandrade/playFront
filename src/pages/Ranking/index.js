import React, { useState, useEffect } from 'react';
import { API } from "aws-amplify";

import config from '../../config/constants';
import Table from './Table/index';
import Navigation from './Navigation/index';
import Filter from './Filter/index';
import Loading from './Loading/index';
import Banner from '../../components/features/Header/Banner';
import imgBanner from '../../assets/images/ranking-1280.png';
import PageContainer from "../../components/features/PageContainer";

import './styles.scss';

const initial_pagination = {
    per_page: 10,
    page: 1,
    total: 0
}


function Ranking() {

    const [pagination, setPagination] = useState(initial_pagination);
    const [ranking, setRanking] = useState([])
    const [filter, setFilter] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const contentBanner = "Vença e chegue ao Topo";
    
    useEffect(()=>{
        if(filter.platform && filter.game){
            getFilter(1)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])
    
    const getFilter = (page) => {
        console.log(filter)
        const options = {response: true}

        const rankingIndividual = `?console_id=${filter.platform.entity_id}&game_id=${filter.game.entity_id}&pagination_page=${page}&pagination_per_page=${10}`
        const myTimes = `my-teams?pagination_per_page=10&pagination_page=1&game_id=${filter.game.entity_id}`
        const rankingPorTImes =`team?pagination_per_page=10&pagination_page=1&game_id=${filter.game.entity_id}`

        const category = () => {
            if (filter.category === "Por times") {
                return rankingPorTImes
            } else if (filter.category === "Meus times"){
                return myTimes
            } else {
                return rankingIndividual
            }
        }

        API.get(config.APIS.PLAYERSTARS, `/player/ranking/${category()}`, options)
                .then(response => {
                    const range = response.headers["content-range"]
                    setError(false)
                    setRanking(response.data.data)
                    setPagination({
                        per_page: pagination.per_page,
                        page: page,
                        total: !range || range.split("/").pop() < 10 ? 10 : range.split("/").pop()
                    })
                    setLoading(false)
                    
            })
            .catch(error => {
                setError(true)
                setLoading(false)
            })
    }

    const handleSetFilter = (key, item, keyTwo, itemTwo) => {
        setFilter({
            ...filter,
            [key]: item,
            [keyTwo]: itemTwo
        })
        setLoading(true)
    }

    const setPage = (page) => {
        getFilter(page)
    }

    const erroMsg = () => {
        if (filter.category === "Meus times") {
            return 'Você ainda não possui times para esse jogo.'
        } else if (filter.category === "Por times") {
            return 'Ainda não há times para esse jogo.'
        } else {
            return `Ops, ocorreu um erro inesperado...Por favor, tente novamente mais tarde.`
        }
    }
    
    return(
        <PageContainer public={false}>
            <Banner imagemBanner={imgBanner} text={contentBanner}/>
            <section className="containerRanking">
                <div className="contentRanking">
                    <h1>Ranking · Red Star</h1>
                    <Filter filter={filter} setFilter={handleSetFilter}/>
                    {loading ? <Loading /> : 
                        error ? <p>{erroMsg()}</p> :
                         <> <Table ranking={ranking} category={filter.category} /> <Navigation pagination={pagination} setPage={(data) => setPage(data)}/> </>
                     }
                </div>
            </section>
        </PageContainer>
    )
}

export default Ranking;