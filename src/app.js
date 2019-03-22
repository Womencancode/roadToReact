'use strict'

const React = require('react');

module.exports = 
    class Title extends React.Component {
        render() {
            return React.createElement(
                'h1', null, 'Title component');
        }
    }