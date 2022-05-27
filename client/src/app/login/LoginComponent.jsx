import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import SelectCustomisadoRpm from "../../componentGlobal/SelectCustomisadoRpm";
import LoginStyle from "./login.module.css";
import VerbinnhoImg from "../../img/logo.png";
import { InputSplitRpm } from "../../componentGlobal/InputSplitRpm";

const options =[
    {value: 1,label:'Salinha 3 a 4 Ano'},
    {value: 2,label:'Salinha 5 a 7 Ano'},
    {value: 3,label:'Salinha 8 a 11 Ano'},
    {value: 4,label:'ADM'},
];

function LoginComponent() {
    

    const validate = values =>{
        const errors = {};

        if(!values.usuario){
            errors.usuario = "O campo do usuário não pode ficar vazio !";
        }

        if(!values.senha){
            errors.senha = "O campo da senha não pode ficar vazio !";
        }

        if(values.sala == 0){
            errors.sala = "Escolha uma salinha !";
        }
        return errors;
    }

    const formik = useFormik({
        initialValues:{
            usuario: "email@exemplo.com",
            senha: "",
            sala: 0
        },
        validate,
        onSubmit: value => {
            console.log(value);
        }
    });

    return(
       <div className={LoginStyle.Container}>
           <div className={LoginStyle.ContainerImg}>
               <img src={VerbinnhoImg} alt="Verbinho Ibura"/>
           </div>
           <div className={LoginStyle.ContainerForm}>
                <form onSubmit={formik.handleSubmit}>

                    <div className={LoginStyle.ContainerLabelInput}>
                        <label htmlFor="usuario">Informe seu Usuário ou E-mail:</label>
                        <input
                        name="usuario"
                        id="usuario"
                        type="usuario"
                        onChange={formik.handleChange}
                        value={formik.values.usuario}/>
                        {formik.errors.usuario ? <div className={LoginStyle.ContainerErrors}>{formik.errors.usuario}</div> :  null }
                    </div>

                    <div className={LoginStyle.ContainerLabelInput}>
                        <label htmlFor="senha">Informe sua senha:</label>
                        <input
                        name="senha"
                        id="senha"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.senha}/>
                        {formik.errors.senha ? <div className={LoginStyle.ContainerErrors}>{formik.errors.senha}</div> :  null }
                    </div>
                    
                    <div className={LoginStyle.ContainerLabelSelect}>
                        <label htmlFor="email">Qual é sua Salinha ?</label>
                            <SelectCustomisadoRpm
                                className={LoginStyle.SelectComponent}
                                options={options}
                                value={formik.values.sala}
                                onChange={ value=>formik.setFieldValue('sala',value.value) }
                            />
                            {formik.errors.sala ? <div className={LoginStyle.ContainerErrors}>{formik.errors.sala}</div> :  null }
                    </div>

                    <div className={LoginStyle.ContainerBotao}>
                        <button type="submit">ENTRAR</button>
                    </div>
                </form>
           </div>
           <div className={LoginStyle.ContainerCadRecSenha}>
               <div>
                   <Link to="/verbinho-app-site/cadastro">Cadastre-se</Link>
               </div>
               <div>
                    <Link to="/verbinho-app-site/recSenha">Escqueceu a senha?</Link>
               </div>
           </div>
           <InputSplitRpm/>
       </div>
    );

    function cleanCampo(){
        let el = document.getElementById("usuario");
        el.value = '';
    }
}

export  {LoginComponent};