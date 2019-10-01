import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Conditional1 extends Component{

   constructor(){
      super()
      this.state={
         login:false
      }
   }


   render(){

      if (this.state.login===true) {
         return (<button className="btn btn-danger">LOGOUT</button>)
      } else {
         return (<button className="btn btn-danger">LOGIN</button>)
      }
   }


}


export default Conditional1
