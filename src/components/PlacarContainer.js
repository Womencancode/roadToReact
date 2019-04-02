'use strict'

import React, { Component } from 'react';
import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends Component { 
    constructor() {
        super();

        this.state = {
            gols_casa: 0,
            gols_visitante: 0
        }
    }

    fazerGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1
        })
    }

    fazerGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1
        })
    }

    render() {
        const pStyle = {
            float: 'left',
            marginRight: '20px'
        };

        const props = this.props;

        return(
            
            <div>
                <div style={pStyle}>
                    <Time 
                        {...props.casa}
                        gols={this.state.gols_casa}
                        marcarGol={this.fazerGolCasa.bind(this)} 
                    />
                </div>
                <div style={pStyle}>
                    <Partida {...props.partida}   
                    />
                </div>
                <div style={pStyle}>
                    <Time 
                        {...props.visitante}
                        gols={this.state.gols_visitante}
                        marcarGol={this.fazerGolVisitante.bind(this)} 
                    />
                </div>
            </div>
        )
    }
}