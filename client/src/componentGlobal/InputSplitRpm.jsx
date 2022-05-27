import React from "react";
import styleimput from "../css/styleimput.module.css";

function InputSplitRpm(){
    return(
        <div className={styleimput.inputContainer}>
            <input
                type="text"
                id="username"
                className={styleimput.textInput}
                autoComplete="off"
                placeholder="Digite Aqui"
            />
            <label for="username" className={styleimput.label}>Teste</label>
        </div>
    );
}

export {InputSplitRpm}