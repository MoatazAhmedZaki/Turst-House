import React, { Component } from 'react'
import { Container } from 'react-materialize';

export default class FloorPlan extends Component {
  render() {
    const info=this.props.info
    const infolength =info.length
    let floor;
    // console.log(infolength)
    if(info) { floor=(<div>
     
      {infolength ===1?<div className="floor-plan my-padd" >
      <h6 className="center">PROPERTY FLOOR PLAN</h6><div className="floor">
      <Container> <p className="floor-title">Ground Floor</p></Container>
      <div className="floor-img center">
      <img className="responsive-img " src={this.props.info[0]} alt="3aw" />

    
      </div>
      </div></div>:infolength ===2?<div className="floor-plan my-padd" >
      <h6 className="center">PROPERTY FLOOR PLAN</h6><div className="floor">
      <Container> <p className="floor-title">Ground Floor</p></Container>
      <div className="floor-img center">
      <img className="responsive-img " src={this.props.info[0]} alt="3aw" />

    
      </div>
      </div><div className="divider floor-divider"></div>
      <div className="floor">
      <Container> <p className="floor-title">First Floor</p></Container>
      <div className="floor-img center">
      <img className="responsive-img " src={this.props.info[1]} alt="3aw" />

      </div>        
      </div></div>:infolength ===3?<div className="floor-plan my-padd" >
      <h6 className="center">PROPERTY FLOOR PLAN</h6><div className="floor">
      <Container> <p className="floor-title">Ground Floor</p></Container>
      <div className="floor-img center">
      <img className="responsive-img " src={this.props.info[0]} alt="3aw" />

    
      </div>
      </div><div className="divider floor-divider"></div>
      <div className="floor">
      <Container> <p className="floor-title">First Floor</p></Container>
      <div className="floor-img center">
      <img className="responsive-img " src={this.props.info[1]} alt="3aw" />

      </div>        
      </div>
      <div className="divider floor-divider"></div>
      <div className="floor">
      <Container> <p className="floor-title">Second Floor</p></Container>
      <div className="floor-img center">
      <img className="responsive-img " src={this.props.info[2]} alt="3aw" />

      </div>        
      </div></div>:infolength===4 ?<div className="floor-plan my-padd" >
      <h6 className="center">PROPERTY FLOOR PLAN</h6><div className="floor">
      <Container> <p className="floor-title">Ground Floor</p></Container>
      <div className="floor-img center">
      <img className="responsive-img " src={this.props.info[0]} alt="3aw" />

    
      </div>
      </div><div className="divider floor-divider"></div>
      <div className="floor">
      <Container> <p className="floor-title">First Floor</p></Container>
      <div className="floor-img center">
      <img className="responsive-img " src={this.props.info[1]} alt="3aw" />

      </div>        
      </div>
      <div className="divider floor-divider"></div>
      <div className="floor">
      <Container> <p className="floor-title">Second Floor</p></Container>
      <div className="floor-img center">
      <img className="responsive-img " src={this.props.info[2]} alt="3aw" />

      </div>        
      </div><div className="divider floor-divider"></div>
      <div className="floor">
      <Container> <p className="floor-title">Third Floor</p></Container>
      <div className="floor-img center">
      <img className="responsive-img " src={this.props.info[3]} alt="3aw" />

      </div>        
      </div></div>:null}</div>)
      


      

    
        
    }

    return (<div>{floor}</div>

     
    )
  }
}
