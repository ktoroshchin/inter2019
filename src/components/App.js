import React, { Component } from 'react';

//components
import InputField from './InputField';
import DataList from './displayDataTable/DataList';

//buttons
import AddKeyValue from './buttons/AddKeyValue';
import DeleteSelected from './buttons/DeleteSelected';
import SortByKey from './buttons/SortByKey';
import SortByValue from './buttons/SortByValue';
import ClearList from './buttons/ClearList';
import ExportXml from './buttons/ExportXml';

//dependecies
import fileSaver from 'file-saver';
import convert from 'xml-js';
import _ from 'lodash';

class App extends Component {

    state = {
        id: 0,
        inputValue: '',
        pairs: [],
        selectedItemId: null,
    }

    //removing non-alphanumeric characters and setting state
    onInputChange = (event) => {
        this.setState({ inputValue: event.target.value.replace(/[^a-z0-9= ]/gi,'') })
    };

    //removing white space and create pair object
    onAdd = () => {
        let string = this.state.inputValue;
        if(string.length > 0 && string.indexOf('=') > 0){
            let splits = string.split('=');
            splits[0] = splits[0].trimRight();
            splits[1] = splits[1].trimLeft();
            let newPair = {
                id: this.state.id,
                key: splits[0],
                value: splits[1],
                selected: null
            }
            this.setState({
                pairs: [...this.state.pairs, newPair ],
                id: this.state.id + 1,
                inputValue: '',
            })
        }
    };

    //deleting selected item  
    onDelete = () => {
        const id = this.state.selectedItemId;
        const pair = this.state.pairs;
        let newPair = pair.filter(element => element.id !== id);
        this.setState({ pairs: newPair })
    }

    //lexigraphical sort by key
    onKeySort = () => {
        const pairs = this.state.pairs;
        let sortedPairs = _.orderBy(pairs, ['key'], ['asc']);
        this.setState({ pairs: sortedPairs })
    };

    //lexigraphical sort by value
    onValueSort = () => {
        const pairs = this.state.pairs;
        let sortedPairs = _.orderBy(pairs, ['value'], ['asc']);
        this.setState({ pairs: sortedPairs })
    };

    //deleting all pair data from state
    onClearList = () => {
        this.setState({ pairs: [] })
    };

    //setting selected element status to true and set others status to false 
    onElementSelectClick = (id) => {
        let pairs = this.state.pairs.map(pair => {
            if(pair.id === id) {
                pair.selected = true;
                return pair;
            } else {
                pair.selected = false;
                return pair;
            }
        })
        this.setState({
            pairs: pairs,
            selectedItemId: id,
        });
    }

    //converting data into xml
    getXmlData = () => {
        let data = this.state.pairs;
        let exportObj = data.map((pair) => {
            return {key: pair.key, value: pair.value}
        });
        let dataArray = [convert.js2xml(exportObj, { compact: true, spaces: 4 })]
        return dataArray;
    }

    //download data as xml file 
    onDownload = (event) => {
      let xmlFile = new Blob(this.getXmlData(),{type: "text/plain;charset=utf-8"})
      fileSaver.saveAs(xmlFile, "keyvalues.xml");
    }

    render(){
        return(
            <div className="row spacing">      
                <div className="col-4">
                    <InputField onInputChange={this.onInputChange} inputValue={this.state.inputValue} />                   
                </div>
                <div className="col-4">
                    <AddKeyValue onAdd={this.onAdd} />
                    <DeleteSelected  onDelete={this.onDelete} />
                    <ClearList onClearList={this.onClearList} />
                    <ExportXml onDownload={this.onDownload} />
                    <SortByKey  onKeySort={this.onKeySort} />
                    <SortByValue onValueSort={this.onValueSort} />               
                </div>
                <div className="col-4">
                    <DataList 
                        onElementSelectClick={this.onElementSelectClick}
                        pairs={this.state.pairs}
                    />     
                </div>
            </div>           
        )
    };
};

export default App;
