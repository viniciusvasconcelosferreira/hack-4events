import React, { useState, useEffect } from "react";
import { Input } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';

import { collection, getDocs } from "firebase/firestore";
import { db } from '../../services/firebase';


export default function Interests() {
    const [comunidade, setComunidade] = useState([]);

    useEffect(() => {
        const fetchInterests = async () => {
            const querySnapshot = await getDocs(collection(db, 'comunidade'));
            const newInterests = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setComunidade(newInterests);
            console.log(comunidade, newInterests);
        };
        fetchInterests();
    }, [comunidade]);

    return (
        <section className={`interests__container`}>
            <div className={`interests__container--header`}>
                <span className={`interests__container--header__title`}>Quais são seus interesses?</span>
                <span className={`interests__container--header__sub-title`}>Escolha 5 ou mais</span>
            </div>
            <div className={`interests__container--sub-header`}>
                <Input
                    className={`interests__container--sub-header__search`}
                    startDecorator={<SearchIcon />}
                    placeholder={`Buscar`}
                    size={"lg"}
                />
            </div>
            <div className={`interests__container--body`} style={{ top: '10%', display: 'flex', flexDirection: 'row' }}>
                {comunidade.map((item, index) => (
                    <div key={item.id} >
                        <div key={crypto.randomUUID()} className={`circle`}>
                            <h2>{item.ideologias}</h2>
                        </div>
                        <div className={`circle`}>
                            <h2>{item.experiencias}</h2>
                        </div>
                        <div className={`circle`}>
                            <h2>{item.social}</h2>
                        </div>
                        <div className={`circle`}>
                            <h2>{item.afinidades}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

