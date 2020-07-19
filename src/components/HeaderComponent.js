import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, } from 'reactstrap';
import {  NavLink } from 'react-router-dom';
import Music from './MusicComponent';
class Header extends Component {
    constructor(props) {
      super(props);

        this.state = {
        isNavOpen: false,
        isModalOpen: false,
    };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
  }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
          });
      }

      handleLogin(event) { //uncontrolled form
          this.toggleModal();
          alert("This function is not support yet, look forward our new update! \r\n\r\n Username:" + this.username.value + "\r\nPassword:" + this.password.value + "\r\nRemember:" + this.remember.checked);
          event.preventDefault();
      }

      booking(){   
        let docHeight = document.body.offsetHeight;
        let widScrHeight = window.screen.height
        //let winHeight = window.innerHeight;
        window.scrollTo({
            top: docHeight - widScrHeight - 100,
            behavior: 'smooth'
          });
         
      }

      render() {
          //paricular homepage header
        if (window.location.pathname === '/home') return (
            <React.Fragment>
          <Navbar dark expand="md" className="fixed-top">
              <div className="container">
                  <NavbarToggler onClick={this.toggleNav} />
                  <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                      <Nav navbar >
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'>
                                    <span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'>
                                    <span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to='/review'>
                                    <span className="fa fa-commenting fa-lg"></span> Review</NavLink>
                            </NavItem>

                           <NavItem>
                          <NavLink className="nav-link"  to='/menu'>
                              <span className="fa fa-list fa-lg"></span> Menu</NavLink>
                          </NavItem>

                          <NavItem>
                          <NavLink className="nav-link" to='/contactus'>
                              <span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                          </NavItem>
                      </Nav>

                      <Nav className=" ml-auto mr-5" navbar>
                          <NavItem>
                              <Music/>
                          </NavItem>
                      </Nav>

                      <Nav className="ml-auto" navbar>
                          <NavItem>
                          
                              <Button  onClick={this.toggleModal}>
                              <span className="fa fa-sign-in fa-lg"></span>Log In </Button>
                         
                          </NavItem>
                      </Nav>
                  </Collapse>
              </div>
          </Navbar>
          <Jumbotron>
              <div className="container">
                  <div className="row row-header">
                      <div className="col-12 col-sm-6 pt-5">
                          <h1>Ristorante con Fusion</h1>
                          <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                      </div>
                      <img src="https://rabbitxyt.github.io/exercise/3-modal/img/logo.png" style={{width:"20%"}}alt="" />
                         <Button  onClick={this.booking} renderAs="button" className="btn  btn-outline-warning active ml-auto bookingButton">
                             <span>Reserve a Table Online</span>
                        </Button>
                   
                  </div>
              </div>
          </Jumbotron>

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader  toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}> {/*uncontrolled form*/}
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" 
                                innerRef={(input) => this.username = input} /> 
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" 
                            innerRef={(input) => this.password = input}/>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox"  name="remember" 
                            innerRef={(input) => this.remember = input}/>
                            Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
          </Modal>
        </React.Fragment>
        );
        //===================normal page header===========================
        else 
        return(
          <React.Fragment>
          <Navbar dark expand="md" className="fixed-top">
              <div className="container">
                  <NavbarToggler onClick={this.toggleNav} />
                  <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                      <Nav navbar >
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'>
                                    <span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'>
                                    <span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to='/review'>
                                    <span className="fa fa-commenting fa-lg"></span> Review</NavLink>
                            </NavItem>

                           <NavItem>
                          <NavLink className="nav-link"  to='/menu'>
                              <span className="fa fa-list fa-lg"></span> Menu</NavLink>
                          </NavItem>

                          <NavItem>
                          <NavLink className="nav-link" to='/contactus'>
                              <span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                          </NavItem>
                      </Nav>

                      <Nav className=" ml-auto mr-5" navbar>
                          <NavItem>
                              <Music/>
                          </NavItem>
                      </Nav>

                      <Nav className="ml-auto" navbar>
                          <NavItem>
                          
                              <Button  onClick={this.toggleModal}>
                              <span className="fa fa-sign-in fa-lg"></span>Log In </Button>
                         
                          </NavItem>
                      </Nav>
                  </Collapse>
              </div>
          </Navbar>
          <Jumbotron>
              <div className="container">
                  <div className="row row-header">
                      <div className="col-12 col-sm-6 pt-5">
                          <h1>Ristorante con Fusion</h1>
                          <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                      </div>
                      <img src="https://rabbitxyt.github.io/exercise/3-modal/img/logo.png" style={{width:"20%"}}alt="" />
                  </div>
              </div>
          </Jumbotron>

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader  toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}> {/*uncontrolled form*/}
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" 
                                innerRef={(input) => this.username = input} /> 
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" 
                            innerRef={(input) => this.password = input}/>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox"  name="remember" 
                            innerRef={(input) => this.remember = input}/>
                            Remember me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
          </Modal>
        </React.Fragment>
        );
      }
    }

export default Header;