import React from "react";
import { useFormik } from "formik";
import SelectCustomisadoRpm from "../../componentGlobal/SelectCustomisadoRpm"
const options =[
    {value: 0,label:'Sala 1, crianças de 4 a 5 Anos'},
    {value: 1,label:'Sala 2, crianças de 6 a 7 Anos'},
    {value: 2,label:'Sala 3, crianças de 8 a 11 Anos'},
    {value: 3,label:'Sala administrativa'},
];

function LoginComponent() {
    

    const validate = values =>{
        const errors = {};

        if(!values.email){
            errors.email = "preencha com um e-mail valido";
        }
        return errors;
    }

    const formik = useFormik({
        initialValues:{
            email: "email@exemplo.com",
            sala: "Escolha a Sua Salinha"
        },
        validate,
        onSubmit: value=>{
            console.log(value);
        }
    });

    return(
        <form onSubmit={formik.handleSubmit}>
            <div className="login-container">
                <label htmlFor="email">Informe seu Email</label>
                <input
                name="email"
                id="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}/>
            </div>

            <div>
                <label htmlFor="email">Qual é sua Salinha ?</label>
                <SelectCustomisadoRpm
                    options={options}
                    value={formik.values.email}
                    onChange={ value=>formik.setFieldValue('sala',value.value) }
                />
            </div>
            {formik.errors.email ? <div className="errors">{formik.errors.email}</div> :  null }
            <button type="submit">Registrar</button>
        </form>
    );
}

export default LoginComponent;