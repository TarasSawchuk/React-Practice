import React, { Component } from 'react';
import './Components/Input/Input';
import './Components/ToDoList/ToDoList';
import {ToDoList} from "./Components/ToDoList/ToDoList";
import {Input} from "./Components/Input/Input";

class App extends Component {
    constructor(props) {
        super(props);

        this.state={
            newItem:"",
            list:[]
        }
    };

    render() {
        return(
            <div className="App">
                <Input />
                <ToDoList/>
            </div>
        );
    }

    updateInput(key, value){
        this.setState({[key]:value});
    };

    addItem(){
        const newItem = {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        const list = [...this.state.list];

        list.push(newItem);

        this.setState({
            list,
            newItem:""
        });
    };

    deleteItem(id){
        const list = [...this.state.list];
        const updList = list.filter(item => item.id !== id);

        this.setState({list: updList});
    };

}

export default App;
