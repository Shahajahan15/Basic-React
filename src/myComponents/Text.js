import React, { Component } from 'react';

class Text extends Component {

    constructor (){
        super()
        this.state={
            desc: "Translation by H. Rackham.",
            userInput: " "
        }
    }

    onChangeHan=(event)=>{
        var myvalue = event.target.value;
        this.setState({userInput:myvalue});
    }


    render() {
        return (
            <div>
                <textarea onChange={this.onChangeHan} placeholder="Your message"></textarea>
                <p>{this.state.userInput}</p>
            </div>
        );
    }
}

export default Text;