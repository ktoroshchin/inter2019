import React from 'react';

const ClearList = (props) =>{
    return(
        <div>
            <button onClick={props.onClearList} className="btn btn-light btn-block button-spacing">Clear</button>
        </div>
    )
};

export default ClearList;