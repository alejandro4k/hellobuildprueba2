import React, { Component } from "react";
import ListRepositories from "../Contenido/Repositories";
import ListEvents from "../Contenido/Events";
import ApiCalendar from "react-google-calendar-api";
import $ from "jquery";
import "./Menu.css";
let contentList;
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nick_user: "",
      section: 0
    };
  }
  componentDidMount() {
    ApiCalendar.handleAuthClick();

    var nickUser = document.getElementById("nickUser");
    nickUser.innerHTML = localStorage.getItem("user");

    $(function() {
      // Sidebar toggle behavior
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar, #content").toggleClass("active");
      });
    });
  }

  changeSection(e, value) {
    e.preventDefault();
    this.setState({
      section: value
    });
  }

  render() {
    if (this.state.section === 0) {
      contentList = <ListRepositories />;
    } else {
      contentList = <ListEvents />;
    }

    return (
      <div>
        <div className="vertical-nav bg-white" id="sidebar">
          <div className="py-4 px-3 mb-4 bg-light">
            <div className="centerHorizontal">
              <img
                src="https://media.licdn.com/dms/image/C4E0BAQEilOKrebYwSA/company-logo_200_200/0?e=1585180800&v=beta&t=-hDsbFmedQet2SBBc1yram7JmmRCkuqNUYGkva709NU"
                alt="..."
                width="65"
                className="mr-3 rounded-circle img-thumbnail shadow-sm"
              />
              <div className="media-body">
                <h4 className="m-0" id="nickUser"></h4>
                
              </div>
            </div>
          </div>

          <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
            Content
          </p>

          <ul className="nav flex-column bg-white mb-0">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-dark font-italic bg-light"
                onClick={e => this.changeSection(e, 0)}
              >
                <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
                GitHub Repositories
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#"
                className="nav-link text-dark font-italic bg-light"
                onClick={e => this.changeSection(e, 1)}
              >
                <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
                Upcoming Events
              </a>
            </li>
          </ul>

          <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
            Sesion
          </p>

          <ul className="nav flex-column bg-white mb-0">
            <li className="nav-item">
              <a
                className="cursor nav-link text-dark font-italic"
                onClick={() => this.props.userloged(0)}
              >
                <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
                Sign Out
              </a>
            </li>
          </ul>
        </div>

        <div className="page-content p-5" id="content">
          <button
            id="sidebarCollapse"
            type="button"
            className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
          >
            <i className="fa fa-bars mr-2"></i>
            <small className="text-uppercase font-weight-bold">TOGGLE</small>
          </button>

          {contentList}
          {/* 
          <div className="row text-white">
            <div className="col-lg-7">
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
              <div className="bg-white p-5 rounded my-5 shadow-sm">
                <p className="lead font-italic mb-0 text-muted">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
            </div>
      
          </div>
              */}
        </div>
      </div>
    );
  }
}
export default Menu;
