import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import {
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Line,
} from "recharts";
import { bloodPressure } from "../data/bloodPressure.js";
import { bloodSugar } from "../data/bloodSugar.js";
import { haemoglobin } from "../data/haemoglobin.js";
import "./dashboard-item.css";

const Charts = () => {
	return (
		<>
			<div id="charts" className="dash-component">
				<legend align="center">Charts</legend>
				<Carousel>
					<Carousel.Item>
						<h4>
							<center>Blood Pressure Trend</center>
						</h4>
						{/*  */}
						{/*  */}
						<LineChart
							width={400}
							height={250}
							data={bloodPressure}
							margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="date" />
							<YAxis />
							<Tooltip />
							{/* <Legend /> */}
							<Line
								type="monotone"
								dataKey="count"
								stroke="#8884d8"
							/>
						</LineChart>
					</Carousel.Item>
					<Carousel.Item>
						<h4>
							<center>Blood Sugar Trend</center>
						</h4>
						<LineChart
							width={400}
							height={250}
							data={bloodSugar}
							margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="date" />
							<YAxis />
							<Tooltip />
							{/* <Legend /> */}
							<Line
								type="monotone"
								dataKey="count"
								stroke="#8884d8"
							/>
						</LineChart>
					</Carousel.Item>
					<Carousel.Item>
						<h4>
							<center>Haemoglobin Trend</center>
						</h4>
						<LineChart
							width={400}
							height={250}
							data={haemoglobin}
							margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="date" />
							<YAxis />
							<Tooltip />
							{/* <Legend /> */}
							<Line
								type="monotone"
								dataKey="count"
								stroke="#8884d8"
							/>
						</LineChart>
					</Carousel.Item>
				</Carousel>
				<div className="dash-button-container">
					<button className="dash-button">
						<span>+</span>
					</button>
				</div>
			</div>
		</>
	);
};
export default Charts;
