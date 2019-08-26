import React from 'react';

// import { Container } from './styles';

export default function Input(props) {
    const estilo = {
        borderColor: props.valorInvalido ? '#d50000' : '#ccc',
        backgroundColor: props.valorInvalido? '#ffcdd2' : '#fff'
    };

    let propriedades = Object.assign({},props);
    delete propriedades.valorInvalido;

    return (
        <input
            type="text"
            style={estilo}
            {...propriedades}
        />
    );
}
