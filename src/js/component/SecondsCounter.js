import React from "react";

//include images into your bundle
import PropTypes from "prop-types";

//create your first component
export function SecondsCounter(props) {
	const partial = "00000" + props.seconds.toString();
    const sa = partial.substr(partial.length - 6).split("");
    const saDivs = 

	return (
		<div className="block">
			<div className="bigDiv">0</div>
			<div className="littleDiv">{sa[0]}</div>
			<div className="littleDiv">{sa[1]}</div>
			<div className="littleDiv">{sa[2]}</div>
			<div className="littleDiv">{sa[3]}</div>
			<div className="littleDiv">{sa[4]}</div>
			<div className="littleDiv">{sa[5]}</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	seconds: PropTypes.number
};
