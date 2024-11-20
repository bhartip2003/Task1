import { Chart } from "chart.js/auto";
import React from "react";
import { income } from "../data.json";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const incomeData = income.annualReports;

//   y-axis data
  const labels = incomeData.map((data) => data.fiscalDateEnding);

//  chart data
  const data = {
    labels,
    datasets: [
      {
        label: "Total Revenue (USD)",
        backgroundColor: "#6366f1",
        data: incomeData.map((data) => data.totalRevenue),
      },
    ],
  };
  return (
    <div className='my-20'>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
