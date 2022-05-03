import React from "react";
import { Link } from "react-router-dom";
import CadStyle from "./cadastro.module.css";
import { useFormik } from "formik";

function CadastroComponent() {

    const formikCadastro = useFormik({

    });
    return (
        <div className={CadStyle.Container}>
            <div className={CadStyle.titulo}>
                <div>
                    <Link to={"/"}>X</Link>
                </div>
                <div>CADASTRO DE USÁRIO</div>
            </div>
            <div className={CadStyle.formCadastro}>
                <form onSubmit={formikCadastro.handleSubmit}>
                    <div>Tela em Construção</div>
                    <div className={CadStyle.ContainerBotao}>
                        <button type="submit">CADASTAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export  {CadastroComponent};