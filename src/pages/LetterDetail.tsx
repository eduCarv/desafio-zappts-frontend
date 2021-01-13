import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/pages/letterDetail.css";
import api from "../services/api";

interface Letter {
  id: number;
  nome: string;
  idade: number;
  assunto: string;
  mensagem: string;
}

interface LetterParams {
  id: string;
}

export default function LetterDetail() {
  const params = useParams<LetterParams>();
  const [letter, setLetter] = useState<Letter>();

  useEffect(() => {
    api.get(`letters/${params.id}`).then(response => {
      setLetter(response.data);
    });
  }, [params.id]);

  if (!letter) {
    return <p>Carregando...</p>;
  }

  return (
    <div id="page-letter-detail">
      <div className="content-wrapper">
        <main>
          <form className="letter-detail-form">
            <fieldset>
              <legend>Veja o que lhe escreveram...</legend>

              <div className="nome-idade">
                <div className="input-block nome">
                  <label htmlFor="name">Nome</label>
                  <input id="name" value={letter.nome} readOnly/>
                </div>

                <div className="input-block idade">
                  <label htmlFor="age">Idade</label>
                  <input id="age" value={letter.idade} readOnly/>
                </div>
              </div>

              <div className="input-block">
                <label htmlFor="subject">Assunto</label>
                <input id="subject" value={letter.assunto} readOnly/>
              </div>

              <div className="input-block">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"                  
                  value={letter.mensagem}
                  readOnly
                />
              </div>
              {/* <button className="ler-button">Marcar como lido</button> */}
            </fieldset>
          </form>
        </main>
      </div>
    </div>
  );
}
