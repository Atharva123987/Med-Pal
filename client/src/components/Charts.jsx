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

	if (!displayData) {
		return (
			<>
			<div>
				<legend align="center">{props.chartType}</legend>
				<p id="floater-nodata">
					No data to show
				</p>
				<LineChart
					width={600}
					height={350}
					data={[{count:'Not available',dateTaken:`${new Date()}`},{}]}
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
		)
	}

	return (
		<>
			<div id="charts">

				{
					displayData &&
					<>
						<legend align="center">{props.chartType}</legend>
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
					</>
				}


			</div>
		</>
	);
};
export default Charts;
