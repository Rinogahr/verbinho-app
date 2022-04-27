import React from "react";
import Select from "react-select";

export default ({ onChange, options, value, className }) => {
    
    const defaultVAlue = (options,value)=>{
        return options ? options.find(option=>option.value === value) : "";
    }

    return(
        <div className={className}>
            <Select
                options={options}
                onChange={ value=>onChange(value) }
                value={defaultVAlue(options,value)}
            />
        </div>
    );
}