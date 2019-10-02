import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Forms extends Component {

    constructor (){
        super()
        this.state={
            Name: "  "
        }
    }

    onChangeHan=(event)=>{
        var newName = event.target.value;
        this.setState({name:newName})
    }

    render() {
        return (
            <div>
                <form>
                    <p>My first form</p>
                    <p>{this.state.name}</p>
                <input onChange={this.onChangeHan} type="text" placeholder="Enter Name"></input>
                <input type="submit" value="submit"></input>
                </form>
            </div>
        );
    }
}

export default Forms;
