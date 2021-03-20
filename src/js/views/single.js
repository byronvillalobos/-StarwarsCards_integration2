import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.var1}</h1>
			<p className="card-text">
				{props.var2}
				<br />
				{props.var3}
				<br />
				{props.var4}
			</p>
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="goBack()" role="button">
					{/* "javascript:history.back()" */}
					Back
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object,
	var1: PropTypes.string,
	var2: PropTypes.string,
	var3: PropTypes.string,
	var4: PropTypes.string
};
