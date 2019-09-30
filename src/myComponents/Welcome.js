import React,{Component} from 'react';

class Welcome extends Component {

    DoClass() {
        alert("from class");
    }

    render (){
        return(
            <div>
                <button onClick={this.DoClass}>class button</button>
                <h1>Hello, I am from {this.props.name}</h1>
            </div>
       );
   }
}

export default Welcome;