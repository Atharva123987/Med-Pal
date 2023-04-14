import React from "react";
import {
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Line,
	Legend,
} from "recharts";

import "./dashboard-item.css";
import '../pages/chartsPage.css'

const Charts = (props) => {
	const displayData = props.chartData.data;
	const {width,height} = props;
	
	if (!displayData) {
		return (
			<>
			<div>
				<Legend align="center">{props.chartType}</Legend>
				<p id="floater-nodata">
					No data to show
				</p>
				<LineChart
					width={width?width:500}
					height={height?height:300}
					data={[{count:'Not available',dateTaken:`${new Date()}`},{}]}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="dateTaken" />
					<YAxis />
					<Tooltip />
					{/* <Legend /> */}
					{/* <Line type="monotone" dataKey="count" stroke="#8884d8" /> */}
				</LineChart>
				</div>

			</>
		)
	}

	return (
		<>

				{
					displayData &&
					<>
					<div>
							<legend align="center">{props.chartType}</legend>
						<LineChart
							width={width?width:500}
							height={height?height:300}
							data={displayData}
						>
							<CartesianGrid strokeDasharray="3 3" />
							{/* <XAxis dataKey="dateTaken" /> */}
							<YAxis />
							<Tooltip />
							<Line type="monotone" dataKey="count" stroke="#8884d8" />
						</LineChart>
						</div>
					</>
				}


			{/* </div> */}
		</>
	);
};
export default Charts;
