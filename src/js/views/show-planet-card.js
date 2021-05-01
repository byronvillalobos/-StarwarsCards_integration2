import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import PlanetCard from "./planet-card.js";

export default function ShowPlanetCard() {
	const { store, actions } = useContext(Context);
	const [searchPlanet, setSearchPlanet] = useState("");
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<div>
			<div className="container topCardClass" />
			<div className="container mt-3">
				<input
					ref={inputRef}
					onChange={event => {
						setSearchPlanet(event.target.value);
					}}
					type="text"
					className="form-control"
					placeholder="Search planet..."
					aria-label="Search Planet"
					name="SearchPlanet"
					id="SearchPlanet"
				/>
				<div className="row d-flex-row flex-nowrap overflow-auto mt-3">
					{store.planets
						.filter(value => {
							if (searchPlanet === "") {
								return value;
							} else if (value.name.toLowerCase().includes(searchPlanet.toLowerCase())) {
								return value;
							}
						})
						.map((item, index) => {
							return (
								<div key={index} className="col-lg-4 mb-5">
									<PlanetCard
										key={index}
										cardId={item.id}
										alt={item.name}
										name={item.name}
										terrain={item.terrain.charAt(0).toUpperCase() + item.climate.slice(1)}
										climate={item.climate.charAt(0).toUpperCase() + item.climate.slice(1)}
										population={item.population}
										buttonUrl="/planet-card-detail/"
										buttonLabel="Learn More!"
										imageUrl="https://preview.redd.it/ftamwl8y4m131.jpg?width=640&crop=smart&auto=webp&s=c674a1fde1d1395cf80d896c6ece6450dca606f8"
									/>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
