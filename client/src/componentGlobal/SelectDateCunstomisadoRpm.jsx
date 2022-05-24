import React, { useState } from 'react';
import DatePicker from 'react-date-picker/dist/entry.nostyle';


function SelectDateCunstomisadoRpm({className, DatePickerClassName}){
    const [value, onChange] = useState( new Date() );

    return(
        <div className={className}>
            <DatePicker format='dd/MM/yyyy'  className={DatePickerClassName} onChange={onChange} value={value}/>
        </div>
    );
}

function SelectDateCunstomisadoRpm2(){
    return(
        <div>dfhsjkldfhjklsdhfklsjdh</div>
    )
}

export  {SelectDateCunstomisadoRpm, SelectDateCunstomisadoRpm2}