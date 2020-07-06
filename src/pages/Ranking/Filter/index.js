import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Select from '../../../components/elements/Select/index';

import './styles.scss';

function Filter(props) {
    
    let consolesRedux = useSelector(state => state.user.consoles)

    const [plataformSelected, setPlataformSelected] = useState('')
    const [gameSelected, setGameSelected] = useState('')
    const [categorySelected, setCategorySelected] = useState('')

    const optionsCategory = [
        { label: "Individual", value: "Individual" },
        { label: "Por times", value: "Por times" },
        { label: "Meus times", value: "Meus times" },
      ];
    
    let formattedConsoleGeneric = (JSONValue) => {
        return JSONValue.map((consoleJSON) => {
            consoleJSON.value = consoleJSON.entity_id;
            consoleJSON.label = consoleJSON.name;
            return consoleJSON
        })
    }

    let FormattedJSONConsoles = formattedConsoleGeneric(consolesRedux);
    let currentConsoleGames = !!plataformSelected.length && FormattedJSONConsoles.find((specificConsole) => specificConsole.name === plataformSelected).games
    let FormattedJSONConsolesGames = !!plataformSelected.length && formattedConsoleGeneric(currentConsoleGames)

    useEffect(() => {
        platformInitial(FormattedJSONConsoles[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if(plataformSelected && !gameSelected)
        changeGame(FormattedJSONConsolesGames[0])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [plataformSelected])

    function platformInitial(c) {
        setPlataformSelected(c.name)
        props.setFilter("platform", c)
    }

    function changePlatform(c) {
        const platform = FormattedJSONConsoles.find(item => item.name === c.name && item.games)
        setPlataformSelected(c.name)
        setGameSelected(platform.games[0].name)
        props.setFilter("platform", c, "game", platform.games[0])
    }

    function changeGame(c) {
        setGameSelected(c.name)
        props.setFilter("game", c)
    }

    function changeCategory(c) {
        setCategorySelected(c.value)
        props.setFilter("category", c.value)
    }
    return (
        <div className="containerFilter">
            <div className="containerSelects">
                <div className="containerSelect">
                    <Select
                        onChange={changePlatform}
                        width={'150px'}
                        placeholder={FormattedJSONConsoles.find(item => item.name === plataformSelected) ? plataformSelected : 'Plataforma'}
                        options={FormattedJSONConsoles}
                        classNames={'select-class'}
                        name="platform"
                    />
                </div>
                <div className="containerSelect">
                    <Select
                        onChange={changeGame}
                        width={'150px'}
                        placeholder={FormattedJSONConsolesGames && FormattedJSONConsolesGames.find(item => item.name === gameSelected) ? gameSelected : 'Jogo'}
                        options={!!plataformSelected.length ? FormattedJSONConsolesGames : []}
                        classNames={'select-class'}
                        name="game"
                    />
                </div>
                <div className="containerSelect">
                    <Select
                        onChange={changeCategory}
                        width={'150px'}
                        placeholder={optionsCategory.find(item => item.value === categorySelected) ? categorySelected : optionsCategory[0].value} 
                        options={optionsCategory}
                        classNames={'select-class'}
                        name="categoria"
                    />
                </div>
            </div>
        </div>
    )
}

export default Filter;