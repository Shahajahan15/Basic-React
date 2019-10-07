import React, {Component} from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Posts extends Component {

    // create state to post data
    constructor(){
        super()
        this.state={
            postData:"",
            postResult:""
        }
    }

    // create array function to set form data
    onChangeHandler=(event)=>{
        var myData = event.target.value
        this.setState({postData:myData})
    }

    // create array function to post data in form
    onClickHandler=()=>{
        axios.post('http://127.0.0.1/reacts/test.php', this.state.postData)
            .then(response=>{
                this.setState({postResult:response.data})
                // alert(this.state.postResult)
            })
            .catch(error=>{
                alert("Something went wrong")
            })
    }

    render() {
        return (
            <div>
                <p>{this.state.postResult}</p>
                <input type="text" onChange={this.onChangeHandler}/>
                <button className="" onClick={this.onClickHandler}>submit</button>
            </div>
        );
    }
}

export default Posts;