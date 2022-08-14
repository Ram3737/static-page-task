import classes from "./Info.module.css";
import DonutChart from "react-donut-chart";

function Chart() {
  return (
    <div className={classes.donChart}>
      <DonutChart
        className={classes.donutChart}
        width={280}
        height={250}
        innerRadius={0.8}
        selectedOffset={0}
        strokeColor={"#fff"}
        outerRadius={1}
        colors={["#195238", "#16cf16", "#efdd11"]}
        data={[
          {
            label: "Complaint",
            value: 14,
          },
          {
            label: "Delayed Clearence",
            value: 8,
          },
          {
            label: "overDue",
            value: 2,
          },
        ]}
      />
    </div>
  );
}

export default Chart;
