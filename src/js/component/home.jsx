import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	console.log(props)
	return (
		<div>

			<div class="container text-center">
				<div class="row">
					<div class="col bg-dark rounded text-light fs-1">
					{props.mindecs}
					</div>
					<div class="col bg-dark rounded text-light fs-1">
					{props.minunits}
					</div>
					<div class="col bg-dark rounded text-light fs-1">
					:
					</div>
					<div class="col bg-dark rounded text-light fs-1">
					{props.sectens}
					</div>
					<div class="col bg-dark rounded text-light fs-1">
					{props.secunits}
					</div>
					<div class="col bg-dark rounded text-light fs-1">
					:
					</div>
					<div class="col bg-dark rounded text-light fs-1">
					{props.milisectens}
					</div>
					<div class="col bg-dark rounded text-light fs-1">
					{props.milisecunits}
					</div>
				</div>
			</div>
	  </div>
	);
};

export default Home;
