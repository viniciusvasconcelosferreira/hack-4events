import React from 'react';
import waveHeader from "../../assets/images/wave-header.svg";
import waveFooter from "../../assets/images/wave-footer.svg";
import logo from "../../assets/images/logo-4community.svg";
import {Button, FormControl, FormLabel, Input, Option, Select} from "@mui/joy";
import {Days, Months, Years} from "../../services/utils";
import moment from "moment";
import {Link} from "react-router-dom";
import './styles.css';

export default function Register() {
    const years = Years();
    const months = Months();
    const days = Days();

    return (
        <section className={`register__container`}>
            <div className={`register__container--header`}>
                <img src={waveHeader} alt=""/>
            </div>
            <div className={`register__container--body`}>
                <div className={`register__container--body__sign-up`}>
                    <span className={`register__container--body__sign-up--logo`}>
                        <img
                            src={logo}
                            alt="Logo da Four Community"
                        />
                    </span>
                    <form className={`register__container--body__sign-up__form`} action="">
                        <FormControl>
                            <FormLabel>E-mail:</FormLabel>
                            <Input
                                className={`register__container--body__sign-up--email`}
                                color="neutral"
                                size="lg"
                                variant="outlined"
                                placeholder="ex: voce@email.com"
                                type={"email"}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Primeiro nome:</FormLabel>
                            <Input
                                className={`register__container--body__sign-up--first-name`}
                                color="neutral"
                                size="lg"
                                variant="outlined"
                                placeholder="ex: João"
                                type={"text"}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Segundo nome:</FormLabel>
                            <Input
                                className={`register__container--body__sign-up--last-name`}
                                color="neutral"
                                size="lg"
                                variant="outlined"
                                placeholder="ex: Pereira"
                                type={"text"}
                            />
                        </FormControl>
                        <FormControl className={`register__container--body__sign-up--born-at`}>
                            <FormLabel>Data de nascimento:</FormLabel>
                            <div className={`register__container--body__sign-up--born-at__selects`}>
                                <Select
                                    placeholder="Dia"
                                    size="lg"
                                >
                                    {days.map((day) => (
                                        <Option value={day}>{day}</Option>
                                    ))}
                                </Select>
                                <Select
                                    placeholder="Mês"
                                    size="lg"
                                >
                                    {months.map((month) => (
                                        <Option value={month}>{moment(month, 'MM').format('MMMM')}</Option>
                                    ))}
                                </Select>
                                <Select
                                    placeholder="Ano"
                                    size="lg"
                                >
                                    {years.map((year) => (
                                        <Option value={year}>{year}</Option>
                                    ))}
                                </Select>
                            </div>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Senha:</FormLabel>
                            <Input
                                className={`register__container--body__sign-up--password`}
                                color="neutral"
                                size="lg"
                                variant="outlined"
                                type={"password"}
                            />
                        </FormControl>
                        <Button
                            className={`login__container--body__sign-in--button`}
                            type="submit"
                            color="info"
                            variant="soft"
                        >Registre-se</Button>
                    </form>
                </div>
                <div className={`register__container--body__sign-in`}>
                    <span className={`register__container--body__sign-in--title`}>Já possui uma conta? Faça</span><Link
                    to={'/login'}> Login</Link>
                </div>
            </div>
            <div className={`register__container--footer`}>
                <img src={waveFooter} alt=""/>
            </div>
        </section>
    )
}