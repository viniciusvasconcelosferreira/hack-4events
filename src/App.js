import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import CreateCommunity from "./pages/CreateCommunity/createCommunity";
import moment from "moment";
import Interests from "./pages/Interests/interests";

moment.locale('pt-br');

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="select-interests" element={<Interests/>}/>
                <Route path="create-community" element={<CreateCommunity/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
