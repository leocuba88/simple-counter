//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SecondsCounter } from "./component/SecondsCounter.js";

//render your react application
let startingTime = Date.now();

function incrementSeconds() {
	let currentTime = Date.now();
	let seconds = Math.floor((currentTime - startingTime) / 1000);

	ReactDOM.render(
		<SecondsCounter seconds={seconds} />,
		document.querySelector("#app")
	);
}
setInterval(incrementSeconds, 1000);
