import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import moment from "moment";

moment.locale('pt-br');

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
