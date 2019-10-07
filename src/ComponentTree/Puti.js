import React, { Component } from 'react';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Puti extends Component {
    render() {
        return (
            <div>
                <h1 className="text-info pt-5">I am from Puti.</h1>
                <h1 className="text-success">{this.props.name}</h1>
            </div>
        );
    }
}

export default Puti;