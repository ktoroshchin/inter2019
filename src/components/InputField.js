import React from 'react';

const InputField = (props) => {
    return(
        <input
            className="form-control"
            value={props.inputValue}
            onChange={props.onInputChange} 
            placeholder="key=value"
        />
    )
};

export default InputField;