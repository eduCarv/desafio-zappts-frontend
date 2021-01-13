import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import "../styles/pages/letterRegister.css";

import api from "../services/api";

export default function LetterRegister() {
  const history = useHistory();

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      nome: nome,
      idade: idade,
      assunto: assunto,
      mensagem: mensagem
    };

    await api.post("letters", data);

    alert("Cadastro realizado com sucesso!");

    history.push("/");
  }

  return (
    <div id="page-letter-register">
      <div className="content-wrapper">
        <main>
          <form
            id="createLetter"
            onSubmit={handleSubmit}
            className="create-letter-form"
          >
            <fieldset>
              <legend>Preencha sua cartinha abaixo</legend>

              <div className="nome-idade">
                <div className="input-block nome">
                  <label htmlFor="nome">Nome</label>
                  <input
                    id="nome"
                    value={nome}
                    onChange={event => setNome(event.target.value)}
                    minLength={5}
                    required
                  />
                </div>

                <div className="input-block idade">
                  <label htmlFor="idade">Idade</label>
                  <input
                    id="idade"
                    type="number"
                    min={0}
                    value={idade}
                    onChange={event => setIdade(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-block">
                <label htmlFor="assunto">Assunto</label>
                <input
                  id="assunto"
                  value={assunto}
                  onChange={event => setAssunto(event.target.value)}
                  minLength={10}
                  required
                />
              </div>

              <div className="input-block">
                <label htmlFor="mensagem">
                  Mensagem <span>Máximo de 300 caracteres</span>
                </label>
                <textarea
                  id="mensagem"
                  maxLength={300}
                  minLength={30}
                  value={mensagem}
                  onChange={event => setMensagem(event.target.value)}
                  required
                />
              </div>
            </fieldset>
            <button className="confirm-button" type="submit">
              Confirmar
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
