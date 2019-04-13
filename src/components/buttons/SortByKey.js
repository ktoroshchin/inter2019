import React from 'react';

const SortByKey = (props) =>{
    return(
        <div>
            <button onClick={props.onKeySort} className="btn btn-info btn-block button-spacing">Sort By Key</button>
        </div>
    )
};

export default SortByKey;