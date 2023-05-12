import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
import groupBy from "lodash/groupBy";

import "./dashboard-item.css";
import "../pages/chartsPage.css";
import LoadingCircle from "./SkeletonLoaders/LoadingCircle";

const Charts = (props) => {
  const displayData = props.chartData.data;
  const { width, height } = props;

  
  if(!displayData){
    return(
      <>
      <LoadingCircle/>
      </>
    )
  }

  if (displayData=={}) {
    return (
      <>
          <Legend align="center">{props.chartType}</Legend>
          <p id="floater-nodata">No data to show</p>
          <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={width ? width : 1}
            height={height ? height : 300}
            data={[
              { count: "Not available", dateTaken: `${new Date()}` },
              {},
            ]}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="dateTaken" /> */}
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            {/* <Line type="monotone" dataKey="count" stroke="#8884d8" /> */}
          </LineChart>
          </ResponsiveContainer>
      </>
    );
  }

  

  return (
    <>
      {displayData && (
        <div className="d-flex flex-column align-items-center">
              <legend align="center">{props.chartType} chart</legend>
          {/* <legend id="charts-legend" align="center">{props.chartType} chart</legend> */}
          <LineChart
            width={width ? width : 500}
            height={height ? height : 300}
            data={displayData}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="dateTaken"
			  tick={null}
            />
            <YAxis />
            <Tooltip
              labelFormatter={(date) => moment(date).format("MM/DD/YYYY")}
              formatter={(value, name, props) => {
                const date = moment(props.payload.dateTaken).format("MM/DD/YYYY");
                const count = Array.isArray(props.payload)
                  ? props.payload.reduce(
                      (sum, data) => sum + data[props.dataKey],
                      0
                    )
                  : props.payload[props.dataKey];
                return [` ${count}`, name];
              }}
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              data={displayData}
            />
          </LineChart>
          
        </div>
      )}
    </>
  );
};
export default Charts;
