import { Chart } from "chart.js/auto";
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { errorSelector, incomeSelector, loadingSelector } from "../store/selectors/incomeSelector";
import { fetchIncomeStatement } from "../store/reducers/income";
import Loading from "./coreComponents/Loading";

const BarChart = ({company}) => {
    const dispatch = useDispatch();
    const loading = useSelector(loadingSelector);
    const error = useSelector(errorSelector);
    const incomeStatement = useSelector(incomeSelector);

  useEffect(() => {
    dispatch(fetchIncomeStatement(company));
  }, [company]);

  if(loading){
    return <Loading/>;
  }

  if(error){
    return <p>{error}</p>
  }

//   y-axis data
  const labels = incomeStatement.length>0 && incomeStatement.map((data) => data.fiscalDateEnding);
  const totalRevenueData = incomeStatement.length> 0 && incomeStatement.map((data) => data.totalRevenue);

//  chart data
  const data = {
    labels,
    datasets: [
      {
        label: "Total Revenue (USD)",
        backgroundColor: "#6366f1",
        data: totalRevenueData,
      },
    ],
  };
  return (
    <div className='my-20'>
      {
        totalRevenueData ? 
        <Bar data={data} /> : "No data found"
      }
    </div>
  );
};

export default BarChart;
