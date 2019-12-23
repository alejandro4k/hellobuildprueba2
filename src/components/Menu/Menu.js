import React, { Component } from "react";
import $ from 'jquery';
import "./Menu.css";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "estado de react"
    };
  }
  componentDidMount(){
    $(function() {
        // Sidebar toggle behavior
        $('#sidebarCollapse').on('click', function() {
          $('#sidebar, #content').toggleClass('active');
        });
      });
  }

  render() {
    return (
      <div>
        <div class="vertical-nav bg-white" id="sidebar">
          <div class="py-4 px-3 mb-4 bg-light">
            <div class="centerHorizontal">
              <img
                src="https://media.licdn.com/dms/image/C4E0BAQEilOKrebYwSA/company-logo_200_200/0?e=1585180800&v=beta&t=-hDsbFmedQet2SBBc1yram7JmmRCkuqNUYGkva709NU"
                alt="..."
                width="65"
                class="mr-3 rounded-circle img-thumbnail shadow-sm"
              />
              
             
            </div>
          </div>

          <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
            Content
          </p>

          <ul class="nav flex-column bg-white mb-0">
            <li class="nav-item">
              <a href="#" class="nav-link text-dark font-italic bg-light">
                <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                GitHub Repositories
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-dark font-italic">
                <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                Upcoming Events
              </a>
            </li>
            
          </ul>

          <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
            Sesion
          </p>

          <ul class="nav flex-column bg-white mb-0">
            <li class="nav-item">
            <a  class="cursor nav-link text-dark font-italic" onClick={()=> this.props.userloged(0)}>
                <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                Sign Out
              </a>
            </li>
           
          </ul>
        </div>

        <div class="page-content p-5" id="content">
          <button
            id="sidebarCollapse"
            type="button"
            class="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
          >
            <i class="fa fa-bars mr-2"></i>
            <small class="text-uppercase font-weight-bold">TOGGLE</small>
          </button>

          <h2 class="display-4 text-white">Bootstrap vertical nav</h2>
          <p class="lead text-white mb-0">
            Build a fixed sidebar using Bootstrap 4 vertical navigation and
            media objects.
          </p>
          <p class="lead text-white">
            Snippet by{" "}
            <a href="https://bootstrapious.com/snippets" class="text-white">
              <u>Bootstrapious</u>
            </a>
          </p>
          <div class="separator"></div>
          <div class="row text-white">
              {/* 
            <div class="col-lg-7">
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
              <div class="bg-white p-5 rounded my-5 shadow-sm">
                <p class="lead font-italic mb-0 text-muted">
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
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p class="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
              </p>
            </div>
              */}
      
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
