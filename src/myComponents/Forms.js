import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Forms extends Component {
    render() {
        return (
            <div>
                <form>
                    <p>My first form</p>
                <input type="text" name="name" placeholder="Enter Name"></input>
                <input type="submit" name="submit" value="submit"></input>
                </form>
            </div>
        );
    }
}

export default Forms;
