import React from 'react';
import { Slider ,Slide  } from 'react-materialize';


export default function Header() {
	return (
<div className="header">

<Slider>

 <Slide src={require('../../img/image4.jpg')} ></Slide>
<Slide src={require('../../img/image3.jpg')} ></Slide>
<Slide src={require('../../img/image2.jpg')} ></Slide>
<Slide  src={require('../../img/image1.webp')}></Slide>
        </Slider>


</div>




		 /* <div className="header">
		 	<Container>
		 		<Row>
		 			<Col m={6} s={12}>
		 				<h1>
		 					Find Your <br />
		 					<span>Property</span>
		 				</h1>
		 			</Col>
		 			<Col m={6} s={12}>
		 				<div>
		 					<form>
		 						<div className="input-field ">
		 							<input id="search" type="search" required />
		 							<label className="label-icon " for="search">
		 								<i className="material-icons">search</i>
		 							</label>
		 							<i className="material-icons">close</i>
		 							<button className="btn waves-effect waves-light my-hover">Search</button>
		 						</div>
		 					</form>
		 				</div>
		 			</Col>
		 		</Row>
		 	</Container>
		 </div> */
	);
}
