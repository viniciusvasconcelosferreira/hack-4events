import React from 'react';
import './styles.css';
import logo from '../../assets/images/logo-4community.svg';
import PrimaryWave from "../../components/Waves/primary";
import SecondaryWave from "../../components/Waves/secondary";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <section className={`login__container`}>
            <div className={`login__container--header`}>
                <SecondaryWave fill={'#5755a1'}/>
                <PrimaryWave fill={'#8777b5'}/>
            </div>
            <div className={`login__container--body`}>
                <div className={`login__container--body__sign-in`}>
                    <span className={`login__container--body__sign-in--logo`}><img src={logo}
                                                                                   alt="Logo da Four Community"/></span>
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

            </div>
        </section>
    );
}