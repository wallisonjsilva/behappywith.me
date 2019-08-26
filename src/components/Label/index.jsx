import React from 'react';

export default function Label(props) {
    const estilo = {
        color: props.valorInvalido ? '#d50000' : '#444'
    }
  return (
    <label
        style={estilo}
        htmlFor={props.for}>{props.texto}</label>
  );
}
