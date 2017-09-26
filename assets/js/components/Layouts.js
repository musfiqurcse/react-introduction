import React from "react";
import Header from "./Header"
import Footer from "./Footer"
export default class Layout extends React.Component{

    constructor(){
        super()
        this.name = "will"
        this.state={
            title: "Welcome1 0 1",
        }
        this.seconds=0
    }

    changeTitle(title){
        this.setState({title})
    }

    render(){
        setTimeout(()=>{
            this.seconds+=5
            this.setState({title: `Welcome after ${this.seconds} seconds `})
        },5000)
        const title = "Welcome title"
        return (
            <div>
            <h1> It Works!Testing Webpack in Local Machine</h1>
            <br />
            <h1> It Works!Testing Webpack in Local {this.state.title}</h1>
                <section>
                    <Header changeTitle={this.changeTitle.bind(this)} name={"some thing else"} title={this.state.title}/>
                </section>
            </div>
        );
    }
}
