import React, { Component } from 'react';

import Avatar from './img/avatars.png';
import Botoes from './img/botoes.png';

export default class Image extends Component {
    constructor(props) {
        super(props);
    }

    calcularPosicaoX() {
        return `${this.props.eixoX * this.props.width * (-1)}px`;
    }

    calcularPosicaoY() {
        return `${this.props.eixoY * this.props.height * (-1)}px`;
    }

    calcularTamanho() {
        return `auto ${this.props.backgroundHeight}px`
    }

    obterArquivo() {
        if (this.props.arquivo === 'avatars')
            return `url(${Avatar})`;
        else if (this.props.arquivo === 'botoes')
            return `url(${Botoes})`;
    }

    obterEstilo() {
        return {
            backgroundImage: this.obterArquivo(),
            backgroundPositionX: this.calcularPosicaoX(),
            backgroundPositionY: this.calcularPosicaoY(),
            backgroundSize: this.calcularTamanho(),
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            display: 'table',
            margin: '0 auto'
        }
    }

    render() {
        return (
            <div style={this.obterEstilo()}>
            </div>);
    }
}
