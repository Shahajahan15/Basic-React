import React, { Component,Fragment } from 'react';
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { PutiConsumer } from './myContext';

class Puti extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="text-success">{this.props.name}</h1>
                <h1 className="text-info">
                    <PutiConsumer>
                        {
                            msg=>{
                                return msg
                            }
                        }
                    </PutiConsumer>
                </h1>
            </Fragment>
        );
    }
}

export default Puti;