import React, {Component} from 'react';

export class ToDoList extends Component {
    render() {
        return(
            <div className="ToDoList">
                <ul>
                    {this.state.list.map(item => {
                        return (
                            <li key={item.id}>
                                {item.value}
                                <button onClick={() => this.deleteItem(item.id)}>X</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}