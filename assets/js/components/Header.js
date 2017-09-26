import React from "react";
import Title from "./Header/Title"
export default class Header extends React.Component {
    constructor(){
        super()
        this.state={
        getInitialState : ()=>{
        return {
            currentTemp: 50
            }
        }
    },
        this.setTemperature=(e)=>{
            this.setState({currentTemp: e.target.value})
    }
    }
    
    
    
   

    
    render(){
        var stateOfMatter;
        if(this.state.currentTemp <= this.props.config.freezing){
            stateOfMatter = 'Solid'
        }
        else if(this.state.currentTemp >=this.props.config.boiling){
            stateOfMatter = 'Gas'
        }
        else{
            stateOfMatter = 'Liquid'
        }
        var names = ['Jakle','Testing','Catherine']
        let nameList = names.map(function(name,index){
                           return <li key={index}>
                               {name}
                               </li>
                               })
        return(
          <div className="Test-Name">
               <Title title={this.props.title}  />
               <ul>
                   {
                       nameList
                   }
                </ul>
                <p>
                    At { this.state.currentTemp }F, {this.props.config.item} is considered to be a "{ stateOfMatter }" state of matter.
                </p>
                <input type="text" onChange={this.setTemperature} value={this.getInitialState} />
          </div>
        )
    }
}