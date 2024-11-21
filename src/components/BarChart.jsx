import { Chart } from "chart.js/auto";
import React, { useEffect } from "react";
import { income } from "../data.json";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { errorSelector, incomeSelector, loadingSelector } from "../store/selectors/incomeSelector";
import { fetchIncomeStatement } from "../store/reducers/income";

const BarChart = ({company}) => {
    const dispatch = useDispatch();
    const loading = useSelector(loadingSelector);
    const error = useSelector(errorSelector);
    const incomeStatement = useSelector(incomeSelector);
    const incomeData = income.annualReports;

  useEffect(() => {
    dispatch(fetchIncomeStatement(company));
  }, [company]);

  if(loading){
    return <p>LOADING...</p>
  }

  if(error){
    return <p>{error}</p>
  }

//   y-axis data
  const labels = incomeStatement.length>0 && incomeStatement.map((data) => data.fiscalDateEnding);

//  chart data
  const data = {
    labels,
    datasets: [
      {
        label: "Total Revenue (USD)",
        backgroundColor: "#6366f1",
        data: incomeStatement.length> 0 && incomeStatement.map((data) => data.totalRevenue),
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
