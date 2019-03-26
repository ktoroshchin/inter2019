import React from 'react';

const AddKeyValue = (props) => {
    return(
        <div className="column">
            <button onClick={props.onAdd} className="btn btn-light btn-block button-spacing">Add</button>
        </div>
    )
};

export default AddKeyValue;


