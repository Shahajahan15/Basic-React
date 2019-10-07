import React, {Component} from 'react';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class CountryList extends Component {

    // create state
    constructor(){
        super()
        this.state={
        myData:[]
        }
    }

    // get data
    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            // console.log(response.data)
            this.setState({myData:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {

        // view data
        const myList = this.state.myData
        const countryName = myList.map((mylist)=>{
            return <li>{mylist.name}</li>
        })

        return (
            <div>
                <ul className="text-info">{countryName}</ul>
            </div>
        );
    }
}

export default CountryList;