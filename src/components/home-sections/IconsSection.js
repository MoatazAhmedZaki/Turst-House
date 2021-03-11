import React, { Component } from 'react'
import{Row, Col, Container} from 'react-materialize'
export default class IconsSection extends Component {
  render() {
    return (
      <div className='icon-section center'>
      <div className="dark-bk">

   <Container>

      <Row>


<div className="customer-sat iconsec center">
<Col l={3} m={6} s={12}>
<div className="customer">
<i className="far fa-grin-beam"></i>
<p className="icon-title">  Customer Satisfaction <br/> <i className="fas fa-sort-down"></i></p></div>
<div className="customer-hover ">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been </p>
        </div></Col>
</div>





<div className="trusted iconsec center">
<Col l={3} m={6} s={12}>
<div className="trus">
<i className="fas fa-shield-alt"></i>
<p className="icon-title"> Trusted <br/> <i className="fas fa-sort-down"></i> </p></div>
<div className="trusted-hover ">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been </p>
        </div>
</Col>
</div>



<div className="Guaranteed iconsec center">
<Col l={3} m={6} s={12}>

<div className="conf">
<i className="fas fa-lock"></i>
<p className="icon-title"> Confidentiality Guaranteed  <br/> <i className="fas fa-sort-down"></i></p>
</div>
<div className="confid-hover ">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been </p>
        </div>

</Col>
</div>


<div className="Fast iconsec">
<Col l={3} m={6} s={12}>

<div className="effi">
<div className="center">
<i className="fas fa-business-time"></i>
<p className="icon-title">  Fast & Effecient <br/><i className="fas fa-sort-down"></i></p></div>

</div>
<div className="effi-hover ">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
             industry. Lorem Ipsum has been </p>
        </div>

</Col>
</div>


      </Row>
      
      </Container>
      </div>
      </div>
    )
  }
}
