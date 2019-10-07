import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';

class MyTable extends Component {

    // create state to set data
    constructor(){
        super();
        this.state={
            tableInfo: []
        }
    }

     // data get from server
    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            // console.log(response.data)
            this.setState({tableInfo:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {

    //     // lacally data show
    //     const tableData=[{name:"tuhin", age:23},{name:"sumon", age:25},{name:"sakil", age:27},{name:"hira", age:20},
    //         {name:"tuhin", age:23},{name:"sumon", age:25},{name:"sakil", age:27},{name:"tuhin", age:23},
    //         {name:"sumon", age:25},{name:"sakil", age:27},{name:"tuhin", age:23},{name:"sumon", age:25}, {name:"sakil", age:27}
    // ]
    //     const cols=[{Header:"Name", accessor: "name"},{Header:"Age", accessor: "age"}]

    //     return (
    //         <div>
    //             <ReactTable
    //                 data={tableData}
    //                 columns={cols}
    //                 defaultPageSize={2}
    //                 pageSizeOptions={[2,4,6,8,10]}
    //             />
    //         </div>
    //     );

        // view data from server
         const myList = this.state.tableInfo
        //  const countryName = myList.map((mylist)=>{
        //      return <li>{mylist.name}</li>
        //  })
        const cols=[{Header:"Country Name", accessor: "name"},{Header:"Capital", accessor: "capital"},{Header:"Population", accessor: "population"},{Header:"Area", accessor:"area"}]

        return (
            <div>
                <ReactTable
                    data={myList}
                    columns={cols}
                    defaultPageSize={20}
                    pageSizeOptions={[10,15,20,25,30]}
                />                
            </div>
        )
    }
}

export default MyTable;