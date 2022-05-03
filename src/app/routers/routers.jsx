import React from 'react';
import '../../css/style-global.modules.css';
import  { LoginComponent }  from '../login/LoginComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CadastroComponent } from "../cadastro/CadastroComponent";
import { RecuperarSenhaComponent } from "../recSenha/RecuperarSenhaComponent";

function RoutersComponent(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginComponent />}/>
            <Route path='/cadastro' element={<CadastroComponent />}/>
            <Route path='/recSenha' element={<RecuperarSenhaComponent />}/>
        </Routes>
    </BrowserRouter>
    );
}

export {RoutersComponent}