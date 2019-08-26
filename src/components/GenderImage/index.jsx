import React from 'react';

import Image from './../Image';

export default function GenderImage(props) {
  return (
    <Image 
        eixoX={0}
        eixoY={(props.genero === 'm') ? 0 : 1}
        width={130}
        height={130}
        backgroundHeight={260}
        arquivo="avatars"
    />
  );
}
