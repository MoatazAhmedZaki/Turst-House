import React from 'react'
import {Col,Row,Container} from 'react-materialize'
import {Link } from 'react-router-dom'
export default class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'CreateUnit',
    data:['category','type','location','city','country','developer','compound','feature']};
  
    }
  
    handleChange=e=> {
     this.props.history.push(`/${e.target.value}`)
    }
  
  
  
    render() {
      return (
        <div className="wholedashboard">
        <Container>
        <Row>
        <Col m={3}></Col>
        <Col m={6} s={12}>
            <select   className="browser-default" value={this.state.value} onChange={this.handleChange}>
            <option value="units">UNITS</option>
            <option value="admin/create"> Create Unit </option>
            <option value="marketing/units">View Units</option>

            </select></Col>
            <Col m={3}></Col>
            </Row>

        
            <Row>
            <div className="admindashboard">
           
                 
                {this.state.data.map(info=>(
                 
                  <Col s={12} m={3}>
                  <div className="admindashbtn">
                      <Link to={`/admin/adddata/${info}`}><button className="btn card-btn" >{info}</button></Link>
                      </div></Col>
                ))}
            {/* <button><Link to="/adddata/city">City</Link></button> */}

        </div></Row></Container></div>
      );
    }
  }