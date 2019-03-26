import React from 'react';

const SortByValue = (props) =>{
    return(
        <div>
            <button onClick={props.onValueSort} className="btn btn-light color btn-block button-spacing">Sort By Value</button>
        </div>
    )
};

export default SortByValue;