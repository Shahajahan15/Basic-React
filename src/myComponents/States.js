import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class States extends Component {

    constructor(){
        super()

        this.state={
            name:"Shahajahan",
            age: 26,
            height: "5 feet 3 inch",
            weight: "52 KG"
        }
    }

    render(){
        return <div className="text-success">
            <h1>{this.state.name}</h1>
            <h1>{this.state.age}</h1>
            <h1>{this.state.height}</h1>
            <h1>{this.state.weight}</h1>
        </div>
    }
}

export default States

