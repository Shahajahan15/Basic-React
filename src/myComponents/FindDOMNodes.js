import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class FindDOMNodes extends Component {

    changeImg() {

        var imgid = document.getElementById('imgID');
        ReactDOM.findDOMNode(imgid).src="https://s3.amazonaws.com/assets.ramraces.com/public/www.heartbreakerhalf.com/generated/5259ac2d7c7e3ad6dcf723416e4d6c10.png?1558987919";
        
    }

    render() {
        return (
            <div>
                <button onClick={this.changeImg}>change</button><br></br>
                <img id="imgID" alt="imge" src="https://cdn-5b857273f911c811cc3b306f.closte.com/wp-content/uploads/2017/09/bootwise-icon-02.png"></img>
            </div>
        );
    }
}

export default FindDOMNodes;