/* eslint-disable default-case */
import React, { Component } from "react";
import Login from "./Login/Login";
import Menu from "./Menu/Menu";
class ComponentMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeCompt: 0
    };
  }
  userLogedCompt() {
    this.setState({
      changeCompt: 1
    });
  }

  showComponent = () => {
    switch (this.state.changeCompt) {
        case 0:
            return <Login userloged={this.userLogedCompt.bind(this)} />;
        break;
        case 1:
            return <Menu/>
        break;
    
    }
  };

  render() {
    return <div className="mainComponent">{this.showComponent()}</div>;
  }
}
export default ComponentMaster;
