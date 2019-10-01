import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class States extends Component {

    constructor(){
        super()

        this.state={
            name:"Shahajahan",
            age: [26,45,64,32,43],   //arrary declaration
            height: "5 feet 3 inch",
            weight: {
                class1: 12,
                class2: 1,
                class3: [5,6,9,10,3],
                class4: 7
            }
        }

    }

    render(){
        return <div className="text-success">
            <h1>{this.state.name}</h1>
            <h1>{this.state.age[3]}</h1>
            <h1>{this.state.height}</h1>
            <h1>{this.state.weight.class3[2]}</h1>
        </div>
    }
}

export default States

