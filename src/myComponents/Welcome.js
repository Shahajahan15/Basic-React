import React,{Component} from 'react';

class Welcome extends Component {

    DoClass(c) {
        alert(c);
    }

    render (){
        return(
            <div>
                <button onClick={this.DoClass.bind(this,'I am parameter from class')}>class button</button>
                <h1>Hello, I am from {this.props.name}</h1>
            </div>
       );
   }
}

export default Welcome;