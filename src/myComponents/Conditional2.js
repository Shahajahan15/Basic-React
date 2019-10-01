import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class Conditional2 extends Component{

   constructor(){
      super()
      this.state={
         login:true
      }
   }


   render(){

      return(

        this.state.login? <h2>I am first</h2> : <h2>I am second</h2>

      )
   }


}


export default Conditional2
