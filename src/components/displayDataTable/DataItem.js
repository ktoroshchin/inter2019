import React from 'react';

const DataItem = ({ pair, onElementSelectClick }) => {
    if(pair.selected) {
        return (
            <li onClick={() => onElementSelectClick(pair.id)} className="list-group-item active" style={{padding: '1.5%'}}>
                {pair.key}={pair.value}
            </li>
        )
    } else {
        return (
            <li onClick={() => onElementSelectClick(pair.id)} className="list-group-item" style={{padding: '1.5%'}}>
                {pair.key}={pair.value}
            </li>
        )
    }
};

export default DataItem;
