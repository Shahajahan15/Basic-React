import React, { Component } from 'react';

class Signup extends Component {

    constructor(){
        super();
        this.state={
            fname: " ",
            lname: " ",
            email: " ",
            mobile: " "

        }
    }

    onChangeHan=(event)=>{
        var iputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[iputName]:inputValue});
    }

    render() {
        return (
            <div>
                <p>First Name: {this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p> Email: {this.state.email}</p>
                <p>Mobile Number: {this.state.mobile}</p>
                <form>
                <input onChange={this.onChangeHan} type="text" name="fname" placeholder="First name"></input><br></br>
                <input onChange={this.onChangeHan} type="text" name="lname" placeholder="Last name"></input><br></br>
                <input onChange={this.onChangeHan} type="email" name="email" placeholder="Enter email"></input><br></br>
                <input onChange={this.onChangeHan} type="tel" name="mobile" placeholder="Mobile Number"></input><br></br>
                <input onChange={this.onChangeHan} type="submit" name="submit" value="submit"></input>
                </form>
            </div>
        );
    }
}

export default Signup;