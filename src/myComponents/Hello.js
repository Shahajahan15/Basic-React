import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Hello extends Component{

   constructor(){
      super()

      this.state={
         name: "Shahajahan"
      }
   }

   changeName(a){

      this.setState({name:a})

   }


   render(){
      return <div className="text-success">
          <h1>{this.state.name}</h1>
          <button onClick={this.changeName.bind(this,"Rain")} className="btn btn-info">change name</button>
      </div>
  }
  
}

// function Hello(){

//     // function DoThis(){
//     //     alert()
//     // }

//     return(
//         <div>
//            <button className="btn btn-info">Test Bootstrap</button>
//         </div>
//    );
// }

export default Hello;