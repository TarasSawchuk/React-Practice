import React, {Component} from 'react';

export class Input extends Component {

    render() {
        return(
            <div className="Input">
                <p>
                    Let`s do this, add your items...
                </p>
                <input type="text"
                       placeholder="Type item here..."
                       value={this.state.newItem}
                       onChange={e => this.updateInput("newItem", e.target.value)}
                />
                <button onClick={() => this.addItem()}>Add</button>
            </div>
        );
    }
}