import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.scss";

export default function VehicleCardDetail() {
	const params = useParams();
	const cardId = parseInt(params.id);
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container topCardClass" />
			<div className="container">
				{store.vehicles.map((item, index) => {
					if (cardId === index) {
						return (
							<div key={index}>
								<div className="row d-flex justify-content-center">
									<div className="container-fluid">
										<div className="mb-3">
											<div className="row g-0">
												<div className="col-lg-4 pr-0">
													<img
														className="card-image-detail"
														src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScmIZNXb-bABpOwmGOSgMLB8Ye-3DZJnp1ZQ&usqp=CAU"
														alt={item.name}
													/>
												</div>
												<div className="col-lg-8">
													<div className="card-body card-body-detail pl-5">
														<h2 className="card-title text-center">{item.name}</h2>
														<p className="card-text text-left m-0">
															Model:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.model.charAt(0).toUpperCase() + item.model.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															Vehicle Class:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.vehicle_class.charAt(0).toUpperCase() +
																item.vehicle_class.slice(1)}
														</p>
														<p className="card-text text-left m-0">
															Crew number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.passengers}
														</p>

														<p className="card-text text-left m-0">
															Capacity:&nbsp;&nbsp;
															{item.passengers}
														</p>
														<p className="card-text text-left m-0">
															Manufacturer:&nbsp;&nbsp;&nbsp;&nbsp;
															{item.name.charAt(0).toUpperCase() + item.name.slice(1)}
														</p>
														{/* <p className="card-text text-left m-0">
															Length:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
															{item.length}
														</p> */}
														<div className="card-button-back d-block">
															<Link to="/show-vehicle-card">
																<button
																	type="button"
																	className="btn btn-light btn-block">
																	Back
																</button>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	);
}
