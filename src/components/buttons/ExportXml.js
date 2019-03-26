import React from 'react';

const ExportXml = (props) =>{
    return(
        <div>
            <button onClick={props.onDownload} className="btn btn-light btn-block button-spacing">Export XML</button>
        </div>
    )
};

export default ExportXml;