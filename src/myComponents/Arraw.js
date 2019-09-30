import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const AlertMe=(A)=>{
    alert(A)
}

const Arraw=()=> {
    
    return(
        <button className="btn btn-success" onClick={AlertMe.bind(this,"I am from Arraw function")}>My Button</button>
    )
}

export default Arraw