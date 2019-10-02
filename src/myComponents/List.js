import React, { Component } from 'react';

class List extends Component {
    render() {

        const country =["Bangladesh","India","Pakistan","China","Japan","Enland"]
        const dataItem = country.map((myData)=>{

            return <li>{myData}</li>

        })


        return (
            <div>
                <ol>
                    {dataItem}
                </ol>
            </div>
        );
    }
}

export default List;