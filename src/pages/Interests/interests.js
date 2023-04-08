import React from "react";
import {Input} from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';

export default function Interests() {
    return (
        <section className={`interests__container`}>
            <div className={`interests__container--header`}>
                <span className={`interests__container--header__title`}>Quais são seus interesses?</span>
                <span className={`interests__container--header__sub-title`}>Escolha 5 ou mais</span>
            </div>
            <div className={`interests__container--sub-header`}>
                <Input
                    className={`interests__container--sub-header__search`}
                    startDecorator={<SearchIcon/>}
                    placeholder={`Buscar`}
                    size={"lg"}
                />
            </div>
            <div className={`interests__container--body`}>
                {new Array(50).fill(0).map((item, index) => (
                    <div className={`circle`}></div>
                ))}
            </div>
        </section>
    );
}