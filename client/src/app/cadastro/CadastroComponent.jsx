import React from "react";
import { Link } from "react-router-dom";
import CadStyle from "./cadastro.module.css";
import { useFormik } from "formik";
import SelectCustomisadoRpm from "../../componentGlobal/SelectCustomisadoRpm";
import {SelectDateCunstomisadoRpm,SelectDateCunstomisadoRpm2} from "../../componentGlobal/SelectDateCunstomisadoRpm";

const options =[
    {value: 1,label:'Salinha 3 a 4 Ano'},
    {value: 2,label:'Salinha 5 a 7 Ano'},
    {value: 3,label:'Salinha 8 a 11 Ano'},
    // {value: 4,label:'ADM'},
];

const sexo =[
    {value: 1,label:'Maculino'},
    {value: 2,label:'Feminino'},
];

const funcao =[
    {value: 1,label:'Professor'},
    {value: 2,label:'Assitente'},
];

function CadastroComponent() {

    const validate = values => {
            const erros = {}


            return erros;
    }

    const formikCadastro = useFormik({
        initialValues:{
            nomeCompleto: "",
            dataNasc: "",
            sexo: 0,
            sala: 0,
            funcao: 0,
        },
        validate,
        onSubmit: value => {
            console.log(value);
        }

    });

    return (
        <div className={CadStyle.Container}>
            <div className={CadStyle.titulo}>
                <div><Link to={"/verbinho-app-site"}>X</Link></div>
                <div>CADASTRO DE USÁRIO</div>
            </div>
            <div>
                <form onSubmit={formikCadastro.handleSubmit}>

                    <div className={CadStyle.ContainerLabelInput}>
                        <label htmlFor="nomeCompleto">Nome Completo:</label>
                        <input
                          name="nomeCompleto"
                          id="nomeCompleto"
                          type="nomeCompleto"
                          onChange={formikCadastro.handleChange}
                          value={formikCadastro.values.nomeCompleto}/>
                    </div>

                    <div className={CadStyle.ContainerLabelInput}>
                        <label htmlFor="dataNasc">Data Nasc:</label>
                        {/* <input
                          name="dataNasc"
                          id="dataNasc"
                          type="dataNasc"
                          onChange={formikCadastro.handleChange}
                          value={formikCadastro.values.dataNasc}/> */}
                          <SelectDateCunstomisadoRpm
                          className={CadStyle.containeSelectDate} DatePickerClassName={CadStyle.PickerClassName}/>
                    </div>

                    <div className={CadStyle.ContainerLabelInput}>
                        <label htmlFor="sexo">Sexo:</label>
                        <SelectCustomisadoRpm
                            className={CadStyle.SelectComponent}
                            options={sexo}
                            value={formikCadastro.values.sexo}
                            onChange={ value=>formikCadastro.setFieldValue('sexo',value.value) }
                        />
                    </div>

                    <div className={CadStyle.ContainerLabelInput}>
                        <label htmlFor="nomeCompleto">Qual é a sua salinha?</label>
                        <SelectCustomisadoRpm
                            className={CadStyle.SelectComponent}
                            options={options}
                            value={formikCadastro.values.sala}
                            onChange={ value=>formikCadastro.setFieldValue('sala',value.value) }
                        />
                    </div>

                    <div className={CadStyle.ContainerLabelInput}>
                        <label htmlFor="nomeCompleto">Qual a sua função?</label>
                        <SelectCustomisadoRpm
                            className={CadStyle.SelectComponent}
                            options={funcao}
                            value={formikCadastro.values.funcao}
                            onChange={ value=>formikCadastro.setFieldValue('funcao',value.value) }
                        />
                    </div>

                    <div className={CadStyle.ContainerLabelInput}>
                        <label htmlFor="dgLogin">Digite seu login:</label>
                        <input
                          name="dgLogin"
                          id="dgLogin"
                          type="dgLogin"
                          onChange={formikCadastro.handleChange}
                          value={formikCadastro.values.dgLogin}/>
                    </div>

                    <div className={CadStyle.ContainerLabelInput}>
                        <label htmlFor="dgSenha">Digite sua senha:</label>
                        <input
                          name="dgSenha"
                          id="dgSenha"
                          type="password"
                          onChange={formikCadastro.handleChange}
                          value={formikCadastro.values.dgSenha}/>
                    </div>

                    <div className={CadStyle.ContainerLabelInput}>
                        <label htmlFor="dgRpSenha">Repita sua senha:</label>
                        <input
                          name="dgRpSenha"
                          id="dgRpSenha"
                          type="password"
                          onChange={formikCadastro.handleChange}
                          value={formikCadastro.values.dgRpSenha}/>
                    </div>

                    <div className={CadStyle.ContainerBotao}>
                        <button type="submit">CADASTRAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export  {CadastroComponent};