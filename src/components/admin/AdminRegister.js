import React, { Component } from 'react'
import {Container,Col,Row} from 'react-materialize'
import axios from 'axios';
import {Link} from 'react-router-dom'
export default class AdminRegister extends Component {

    constructor()
{
        super();
        this.state ={
            name:"",
            password:"",
            hidden:true
        };
    }


    onChange=e=>
    {
        this.setState({[e.target.name]:e.target.value})
    }
     
    adminregister=e=>
    {

        e.preventDefault();
        const adminrequest={
            name:this.state.name,
            password:this.state.password
        };
        axios.post("http://localhost:5000/api/admins/registerAdmin",
       adminrequest
        )
        .then(this.setState({ hidden: false }))
        .then(
          setTimeout(() => {
            this.setState({ hidden: true });
          }, 4000)
        )
        .then(
          this.setState({
            name:"",
            password:""
          })
        )
    }
    
        

    render() {
        return (
            <div>
                 <div className="registernav">
                        <p>already have an account?                   
                    <Link to="/adminlogin"><button className="btn adminloginbtn">Login</button></Link>
                       </p>
                    </div>
            <div className="adminregister">
                
                <Container>
                   

                <form className="adminregisterform">
              <Row>
              <Col m={3}></Col>

                    <Col s={12} m={6}>
                      <div className="input-field">
                        <input
                          id="name"
                          type="text"
                          className="validate"
                          value={this.state.name}
                          onChange={this.onChange}
                          name="name"
                        />
                        <label htmlFor="name">Name</label>
                      </div>
                    </Col>
                    <Col m={3}></Col>

                  </Row>

                
<Row>
    <Col m={3}></Col>
    <Col s={12} m={6}>
                  <div className="input-field">
                    <input
                      id="password"
                      type="password"
                      className="validate"
                      value={this.state.password}
                      onChange={this.onChange}
                      name="password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </Col>

    <Col m={3}></Col>

</Row>
                
<Col s={12} className="center">
                  <div hidden={this.state.hidden} className="modal-dialogg ">
                    <p id="snackbarr">Admin has been added successfully</p>
                  </div>
                  
<button
                    type="submit"
                    className="btn card-btn"
                    onClick={this.adminregister}
                  >
                  Register
                  </button>
                </Col> 
                 
            </form>
          </Container>
            </div>            </div>

        )
    }
}
