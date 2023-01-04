import React from "react";
import { Component } from "react";
class Hello extends Component{
    render(){
        const a = 10;
        return (
            <div>
                <h1>The value of a is : {a}</h1>
                <p>we can also use another syntax witout jsx which is 
                    React.createElement('h1',{},`The value of a is : ${a}`)
                </p>
                <h1>This is jsx example...!</h1>
            </div>
        )
    }
}
export default Hello;