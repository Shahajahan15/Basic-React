import React, { Component } from 'react';

class Select extends Component {

    constructor(){
        super()
        this.state={
            city1:"Dhaka",
            city2:"Rangpur",
            city3:"Dinajpur",
            city4:"Khulna",
            auto: "Dinajpur",
            show: " "
        }
    }

    onChangeHan=(event)=>{
        var myvalue = event.target.value;
        this.setState({auto:myvalue});
        this.setState({show:myvalue});
    }


    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHan} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select>
            </div>
        );
    }
}

export default Select;