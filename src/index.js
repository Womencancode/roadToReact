'use strict'

import React from 'react';
import { render } from 'react-dom';
import PlacarContainer from './components/PlacarContainer';

const dados = {
    partida: {
        estadio: "Maracanã/RJ",
        data: "01/04/2019",
        hora: "19:00"
    },
    casa: {
        nome: "Vasco"
    },
    visitante: {
        nome: "Curitiba"
    }
}

render(
    <PlacarContainer {...dados} />,
    document.querySelector('[data-js=app]')
);
