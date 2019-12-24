import React, { Component } from "react";
import './Main.css'
import axios from "axios";
let listTable;
class Repositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: []
    };
  }
  componentDidMount() {
    var username = localStorage.getItem("user");
    try {
      axios
        .get("https://api.github.com/users/" + username + "/repos")
        .then(res => {
          res = res.data;
              this.setState({
                repositories: res
              });
          
        });
    } catch (error) {}
  }
  render() {
    if (this.state.repositories.length>0) {
      listTable = this.state.repositories.map(function(e) {

        return (
          
            <a className="list-group-item text-blue marBottom2" href={e.html_url} target="_blank" >{e.name}</a>
          
        );
      });
    } else {
      listTable = (
        <div>
          <h3 className="txt-white">Not found repositories</h3>
        </div>
      );
    }

    return (
      
        <ul className="list-group">{listTable}</ul>
     
    );
  }
}
export default Repositories;
