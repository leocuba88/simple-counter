import React from "react";

//include images into your bundle
import PropTypes from "prop-types";

//create your first component
export function SecondsCounter(props) {
	const partial = "00000" + props.seconds.toString();
	const sa = partial.substr(partial.length - 6).split("");
	const saDivs = sa.map((index, i) => {
		return (
			<div className="littleDiv" key={i}>
				{index}
			</div>
		);
	});

	return (
		<div className="block">
			<div className="bigDiv">
				<i className="far fa-clock fa-5x"></i>
			</div>

			<div className="little">{saDivs}</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	seconds: PropTypes.number
};
