import React from "react";
import {Input} from "@mui/joy";
import {Checkbox, FormGroup} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';
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
                    <FormGroup key={item}>
                        <Checkbox
                            variant="soft"
                            color="secondary"
                            icon={<RadioButtonUncheckedIcon color={`secondary`}/>}
                            checkedIcon={<CircleIcon/>}
                            sx={{'& .MuiSvgIcon-root': {fontSize: 200}}}
                        />
                    </FormGroup>
                ))}
            </div>
        </section>
    );
}