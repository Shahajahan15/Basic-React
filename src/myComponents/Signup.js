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

        if(iputName === "fname"){
            var namePatter=/^([A-Za-z])$/;
            if (namePatter.test(inputValue)) {
                this.setState({fname:"First name is not valid"});
            }
        }

        if(iputName === "lname"){
            var lnamePatter=/^([A-Za-z])$/;
            if (lnamePatter.test(inputValue)) {
                this.setState({lname:"Last name is not valid"});
            }
        }

        if(iputName === "email"){
            var emailPatter=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$/;
            if (emailPatter.test(inputValue)) {
                this.setState({email:"Email is not valid"});
            }
        }

        if(iputName === "mobile"){
            var mobilePatter=/^[2-9]\d{2}-\d{3}-\d{4}$/;
            if (mobilePatter.test(inputValue)) {
                this.setState({mobile:"Mobile is not valid"});
            }
        }

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