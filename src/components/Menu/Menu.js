/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./Menu.css";
class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
          name: "estado de react"
        };
      }

    render(){
        return(
            <div>
            <h1>MENUUUUUUU</h1>
        <h3>{this.state.name}</h3>
            </div>
        )
    }

}
export default Menu;