import React from "react";
import ReactDOM from "react-dom";
class Layout extends React.Component{

    constructor(){
        super()
        this.name = "will"
    }
    render(){
        return (
            <div>
            <h1> It Works!Testing Webpack in Local Machine</h1>
            <br />
            <h1> It Works!Testing Webpack in Local {this.name}</h1>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app)