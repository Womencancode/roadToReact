'use strict'

import React, { Component } from 'react';

export default class Partida extends Component {
    constructor() {
        super();
    }

    render() {
        const props = this.props;

        return(
            <div>
                <h1> {props.estadio} </h1>
                <span> {props.data} </span>
                <span> - </span>
                <span>{props.hora}</span>
            </div>
        );
    }
}