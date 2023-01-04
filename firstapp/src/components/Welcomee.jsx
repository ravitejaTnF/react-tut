import React from "react";
import { Component } from "react";
class Welcomee extends Component{
    constructor(){
        super();
        this.state = {
            message:'Welcome user..!'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thanks for subscribing..!'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Welcomee;