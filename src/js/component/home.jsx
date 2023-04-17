import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	console.log(props)
	return (
		<div className="text-center bg-dark">
				<button class="btn btn-secondary btn-lg">reloj</button>
				<button class="btn btn-secondary btn-lg">{props.mindecs}</button>
				<button class="btn btn-secondary btn-lg">{props.minunits}</button>
				<button class="btn btn-secondary btn-lg">:</button>
				<button class="btn btn-secondary btn-lg">{props.sectens}</button>
				<button class="btn btn-secondary btn-lg">{props.secunits}</button>
				<button class="btn btn-secondary btn-lg">:</button>
				<button class="btn btn-secondary btn-lg">{props.milisectens}</button>
				<button class="btn btn-secondary btn-lg">{props.milisecunits}</button>
		</div>
	);
};

export default Home;
