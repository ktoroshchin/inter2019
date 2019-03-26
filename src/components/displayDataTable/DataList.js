import React from 'react';
import DataItem from './DataItem';

const DataList = ({pairs, onElementSelectClick}) => {
    const renderList = pairs.map(pair => 
        <DataItem 
            key={pair.id}
            pair={pair}
            onElementSelectClick={onElementSelectClick}
        />
    );
    return <div>{renderList}</div>
};

export default DataList;