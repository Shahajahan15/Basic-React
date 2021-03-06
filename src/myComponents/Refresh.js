import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Refresh extends Component{


    constructor(){
        super()
  
        this.refreshNow=this.refreshNow.bind(this);
     }

    refreshNow(){
        this.forceUpdate();
    }

    render(){

        return(
            <div>
                <button onClick={this.refreshNow} className='btn btn-success'>Refresh Button</button>
                <h2>{Math.random()}</h2>
            </div>
        )

    }
}

export default Refresh