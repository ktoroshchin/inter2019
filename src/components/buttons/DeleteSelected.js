import React from 'react';

const DeleteSelected = (props) =>{
    return(
        <div>
            <button onClick={props.onDelete} className="btn btn-danger btn-block button-spacing">Delete Selected</button>
        </div>
    )
};

export default DeleteSelected;