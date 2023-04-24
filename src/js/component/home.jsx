import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	console.log(props)
	return (
		<div>

			<div className="container text-center">
				<div className="row">
					<div className="col bg-dark rounded text-light display-1">
					<i className="fa-sharp fa-regular fa-clock"></i>
					</div>
					<div className="col bg-dark rounded text-light display-1">
					{props.mindecs}
					</div>
					<div className="col bg-dark rounded text-light display-1">
					{props.minunits}
					</div>
					<div className="col bg-dark rounded text-light display-1">
					:
					</div>
					<div className="col bg-dark rounded text-light display-1">
					{props.sectens}
					</div>
					<div className="col bg-dark rounded text-light display-1">
					{props.secunits}
					</div>
					<div className="col bg-dark rounded text-light display-1">
					:
					</div>
					<div className="col bg-dark rounded text-light display-1">
					{props.milisectens}
					</div>
					<div className="col bg-dark rounded text-light display-1">
					{props.milisecunits}
					</div>
				</div>
			</div>
	  </div>
	);
};

export default Home;
