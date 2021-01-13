import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

import "../styles/global.css";
import "../styles/pages/landing.css";

import noelImg from "../images/santa_landing2.svg";
import mailBox from "../images/mailbox.svg";

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <main>
          <h1>Que tal enviar a sua cartinha para o Papai Noel por aqui?</h1>
        </main>

        <Link to="/letters/create" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
        <img src={mailBox} alt="mail-box" className="mailbox" />

        <img src={noelImg} alt="noel" className="noel" />
        <Link to="/letters" className="acesso-restrito">
          Acesso restrito
        </Link>
      </div>
    </div>
  );
}
