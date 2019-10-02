import React, { Component } from 'react';

class JasonList extends Component {

    mydatacity=(data)=>{
        return <option>{data.City}</option>
    }

    mydatazip=(data)=>{
        return <option>{data.Zip}</option>
    }

    render() {

        const mylist =[
            {
                City: "Dhaka",
                Zip: 6548
            },
            {
                City: "Feni",
                Zip: 9548
            },
            {
                City: "Khulna",
                Zip: 4548
            }
        ]
        const dataItemCity = mylist.map(this.mydatacity);
        const dataItemZip = mylist.map(this.mydatazip);

        return (
            <div>
                <select>{dataItemCity}</select>
                <select>{dataItemZip}</select>
            </div>
        );
    }
}

export default JasonList;