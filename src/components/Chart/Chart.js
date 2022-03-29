import ChartBar from "./CharBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoint.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);// Max function accepts individual element (comma saparated), not an array.

  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
