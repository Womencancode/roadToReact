'use strict'

import React, { Component } from 'react';

export default class BotaoGol extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <button onClick={this.props.marcarGol}>Gol!</button>
            </div>
        );
    }
}