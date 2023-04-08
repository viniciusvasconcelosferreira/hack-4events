import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@mui/joy";
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
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
            <div className={`interests__container--body`}>
                <Box role="group" aria-labelledby="topping">
                    <List
                        orientation="horizontal"
                        wrap
                        sx={{
                            '--List-gap': '8px',
                            '--ListItem-radius': '50px',
                        }}
                    >
                        {comunidade.map((item, index) => (
                            <ListItem key={item.id}>
                                <Checkbox
                                    overlay
                                    disableIcon
                                    variant="soft"
                                    label={item.afinidades}
                                />
                            </ListItem>
                        ))}
                        {comunidade.map((item, index) => (
                            <ListItem key={item.id}>
                                <Checkbox
                                    overlay
                                    disableIcon
                                    variant="soft"
                                    label={item.ideologias}
                                />
                            </ListItem>
                        ))}
                        {comunidade.map((item, index) => (
                            <ListItem key={item.id}>
                                <Checkbox
                                    overlay
                                    disableIcon
                                    variant="soft"
                                    label={item.social}
                                />
                            </ListItem>
                        ))}
                        {comunidade.map((item, index) => (
                            <ListItem key={item.id}>
                                <Checkbox
                                    overlay
                                    disableIcon
                                    variant="soft"
                                    label={item.experiencias}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </div>
        </section>
    );
}

