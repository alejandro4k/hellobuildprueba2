/* eslint-disable default-case */
import React, { Component } from "react";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
import ApiCalendar from "react-google-calendar-api";
class ComponentMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeCompt: 0
    };
  }
  componentWillMount(){
    if(localStorage.getItem("user") != null && localStorage.getItem("password") != null){
      this.setState({
        changeCompt:1
      })

    }
  }
  userLogedCompt(value) {
    
    if (value === 0) {
      ApiCalendar.handleSignoutClick();
      /* 
      localStorage.removeItem("user");
      localStorage.removeItem("password");
      */
    }
    
    this.setState({
      changeCompt: value
    });
  }

  showComponent = () => {
    switch (this.state.changeCompt) {
      case 0:
        return <Login userloged={this.userLogedCompt.bind(this)} />;
        break;
      case 1:
        return <Menu userloged={this.userLogedCompt.bind(this)} />;
        break;
    }
  };

  render() {
    return <div className="mainComponent">{this.showComponent()}</div>;
  }
}
export default ComponentMaster;
