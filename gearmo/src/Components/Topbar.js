import React, { Component } from 'react';
import styles from '../App.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import logo from '../Images/gearmoIcon.png';


class Topbar extends Component {
    render() {
        return (
            <div style = {{backgroundColor: 'brown'}}>
        <Navbar >

            <Navbar.Header>
        <img src={logo}  alt="logo" className="App-logo"/>
        </Navbar.Header>
        <Nav>
        <NavItem eventKey={1} href="#">
        <div className = "gearmo">
        Gearmo
        </div>
        </NavItem>
        <NavItem >
        <div style ={{paddingTop: "44px", backgroundColor: 'yellow'}}>
          <form  action="" >
            <input style= {{width: "512px", height: "36px"}} type="text" placeholder="Search.."/>
          </form>
        </div>
        </NavItem>
        <NavItem>
          <div className = "menuitems">
        FAQ
        </div>
        </NavItem>
        <NavItem>
        <div className = "menuitems">
        About Us
        </div>
        </NavItem>
        <NavItem>
        <div className = "menuitems">
        Contact Us
        </div>
        </NavItem>
        </Nav>
        </Navbar>
        </div>
        );
    }
}

export default Topbar;
