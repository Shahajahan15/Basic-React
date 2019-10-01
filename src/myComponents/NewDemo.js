
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class NewDemo extends Component {

    myFun(){
        var container = document.getElementById('myID');
        var elements = <h1>My name is Rain from ReactDOM</h1>;
        var callbackss = function () {
            alert("Hi I am from callback function")
        }
        ReactDOM.render(elements,container,callbackss)
    }


    render() {
        return (
            <div>
                <button onClick={this.myFun} className="btn btn-warning">Change</button>
                <h1 id="myID">My name is Shahajahan</h1>
            </div>
        );
    }
}

export default NewDemo;