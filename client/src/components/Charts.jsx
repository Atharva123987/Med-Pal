import React from "react";
import {
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Line,
} from "recharts";

import "./dashboard-item.css";

const Charts = (props) => {
	const displayData = props.chartData.data;
	return (
		<>
			<div id="charts">
				<legend align="center">{props.chartType}</legend>
				<h4>{/* <center>{displayData.testName}</center> */}</h4>
				<LineChart
					width={600}
					height={350}
					data={displayData}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="dateTaken" />
					<YAxis />
					<Tooltip />
					{/* <Legend /> */}
					<Line type="monotone" dataKey="count" stroke="#8884d8" />
				</LineChart>
				
			</div>
		</>
	);
};
export default Charts;
