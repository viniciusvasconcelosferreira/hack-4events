import React from 'react';
import logo from '../../assets/images/logo-4community.svg';
import waveHeader from '../../assets/images/wave-header.svg';
import waveFooter from '../../assets/images/wave-footer.svg';
import {Button, Input} from "@mui/joy";
import {Link} from "react-router-dom";
import './styles.css';

export default function Login() {
    return (
        <section className={`login__container`}>
            <div className={`login__container--header`}>
                <img src={waveHeader} alt=""/>
            </div>
            <div className={`login__container--body`}>
                <div className={`login__container--body__sign-in`}>
                    <span className={`login__container--body__sign-in--logo`}>
                        <img
                            src={logo}
                            alt="Logo da Four Community"
                        />
                    </span>
                    <span className={`login__container--body__sign-in--title`}>Entre com seu email</span>
                    <span className={`login__container--body__sign-in--sub-title`}>Para acessar suas comunidades</span>
                    <form className={`login__container--body__form`} action="">
                        <Input
                            className={`login__container--body__sign-in--email`}
                            color="neutral"
                            size="lg"
                            variant="outlined"
                            placeholder="Digite seu email"
                            type={"email"}
                        />
                        <Input
                            className={`login__container--body__sign-in--password`}
                            color="neutral"
                            size="lg"
                            variant="outlined"
                            placeholder="Digite sua senha"
                            type={"password"}
                        />
                        <Button
                            className={`login__container--body__sign-in--button`}
                            type="submit"
                            color="success"
                            variant="soft"
                        >Entrar</Button>
                    </form>
                </div>
                <div className={`login__container--body__sign-up`}>
                    <span className={`login__container--body__sign-up--title`}>Ou</span>
                    <Link to={'/register'} className={`login__container--body__sign-up--button`}>Crie uma conta
                        grátis</Link>
                </div>
            </div>
            <div className={`login__container--footer`}>
                <img src={waveFooter} alt=""/>
            </div>
        </section>
    );
}