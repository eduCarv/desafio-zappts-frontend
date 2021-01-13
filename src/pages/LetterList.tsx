import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import api from "../services/api";

import "../styles/pages/letterList.css";

interface Letter {
  id: number;
  nome: string;
  idade: number;
  assunto: string;  
}

export default function LetterList() {
  const [letters, setLetters] = useState<Letter[]>([]);

  useEffect(() => {
    api.get("letters").then(response => {
      setLetters(response.data);
    });
  }, []);

  return (
    <div id="page-letter-list">
      <div className="content-wrapper-letter-list">
        <legend className="main">
          <h1>Olá Noel! Você tem {`${letters.length}`} cartas para ler</h1>
        </legend>

        <ul>
          {letters.map(letter => {
            return (
              <li key={letter.id}>
                <Link to={`/letters/${letter.id}`}>
                  <div className="list-item">
                    <span className="letter-id">{letter.id}</span>
                    <div className="nome-list">
                      <label htmlFor="nome">Nome: </label>
                      <span className="span-list">{letter.nome}</span>
                    </div>

                    <div className="idade-list">
                      <label htmlFor="idade">Idade: </label>
                      <span className="span-list">{letter.idade}</span>
                    </div>

                    <div className="assunto-list">
                      <label htmlFor="assunto">Assunto: </label>
                      <span className="span-list">{letter.assunto}</span>
                    </div>

                    {/* <div className="checkbox">
                      <input
                        type="checkbox"
                        name="lido"
                        id=""
                        defaultChecked={letter.lido}
                        disabled
                      />
                      <span>  Lido</span>
                    </div> */}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
