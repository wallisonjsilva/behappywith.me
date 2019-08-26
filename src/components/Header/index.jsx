import React from 'react';

import logo from './img/logo.png';
import './index.css';

export default function Header() {
  return (
    <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
        <a href="/"><img className="logo" src={logo} /></a>
        <h4 className="label">Agenda de Gentilezas</h4>
    </div>
  );
}
