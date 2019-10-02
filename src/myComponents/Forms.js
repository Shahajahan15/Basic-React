import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Forms extends Component {

    constructor (){
        super()
        this.state={
            username: " "
        }
    }

    onChangeHan=(event)=>{
        var myname = event.target.name;
        var myvalue = event.target.value;
        this.setState({[myname]:myvalue});
    }

    onSubmitHandler=()=>{
        alert(this.state.username);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>My first form</p>
                    <p>{this.state.username}</p>
                    <input name="username" onChange={this.onChangeHan} type="text" placeholder="Enter Name"></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        );
    }
}

export default Forms;
