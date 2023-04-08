import React from 'react';
import './styles.css';
import logo from '../../assets/images/logo-4community.svg';
import PrimaryWave from "../../components/Waves/primary";
import SecondaryWave from "../../components/Waves/secondary";
// import {Link} from "react-router-dom";

export default function Register() {
  return (
    <section className={`login__container`}>
      <div className={`login__container--header`}>
        <SecondaryWave fill={'#5755a1'} />
        <PrimaryWave fill={'#8777b5'} />
      </div>
      <div className={`login__container--body`}>
        <div className={`login__container--body__sign-in`}>
          <span className={`login__container--body__sign-in--logo`}><img src={logo}
            alt="Logo da Four Community" /></span>
          <form >
            <h1>4.community</h1>
            <label>E-mail:</label>
            <br></br>
            <input name="email" placeholder="ex: voce@email.com" />
            <br></br>
            <label>Primeiro nome:</label>
            <br></br>
            <input name="firstName" placeholder="ex: João" />
            <br></br>
            <label>Sobrenome:</label>
            <br></br>
            <input name="lastName" placeholder="ex: Santana" />
            <br></br>
            <label>Data de Nascimento:</label>
            <br></br>
            <input name="date" type="date" />
            <br></br>
            <label>Senha:</label>
            <br></br>
            <input name="password" />
            <br></br>
            <input type="submit" value={SubmitEvent} />
          </form>
        </div>
      </div>
      <br></br>
    </section>
  )
}