import React from 'react';
import './styles.css';
import Waves from "../../components/Waves";
import logo from '../../assets/images/logo-4community.svg';

export default function Login() {
    return (
        <section className={`login__container`}>
            <div className={`login__container--header`}>
                <Waves fill={'#5755a1'}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#8777b5" fill-opacity="1"
                          d="M0,96L60,85.3C120,75,240,53,360,80C480,107,600,181,720,213.3C840,245,960,235,1080,208C1200,181,1320,139,1380,117.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </div>
            <div className={`login__container--body`}>
                <div className={`login__container--body__sign-in`}>
                    <span className={`login__container--body__sign-in--logo`}><img src={logo} alt=""/></span>
                    <span className={`login__container--body__sign-in--title`}>Entre com seu email</span>
                    <span className={`login__container--body__sign-in--sub-title`}>Para acessar suas comunidades</span>
                    <form action="">
                        <input className={`login__container--body__sign-in--email`} type="email"
                               placeholder="Digite seu email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                               title="Endereço de email inválido"/>
                        <input className={`login__container--body__sign-in--password`} type="password"/>
                        <button className={`login__container--body__sign-in--button`} type="submit">Entrar</button>
                    </form>
                </div>
                <div className={`login__container--body__sign-up`}>
                    <span className={`login__container--body__sign-up--title`}>Ou</span>
                    <span className={`login__container--body__sign-up--button`}>Crie uma conta grátis</span>
                </div>
            </div>
            <div className={`login__container--footer`}>
                <Waves fill={'#5755a1'}/>
            </div>
        </section>
    );
}