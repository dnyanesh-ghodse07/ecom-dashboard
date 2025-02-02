import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const TotalRevenue = () => {
  const [chartData, setChartData] = useState<DataPoint[]>([]);

  const fetchData = async () => {
    const response = await fetch("../../../src/data/revenue.json");
    const data = await response.json();
    console.log("data");
    setChartData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalRevenue = chartData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="bg-white p-4 rounded-xl">
      <h1 className="text-xl font-bold">Total Revenue</h1>
      <h1 className="text-2xl my-4">${totalRevenue.toLocaleString()}</h1>
      <MyLineChart data={chartData} />
    </div>
  );
};

export default TotalRevenue;

interface DataPoint {
  date: string;
  amount: number;
}

const MyLineChart: React.FC<{ data: DataPoint[] }> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray={"5 5"} />
        <XAxis dataKey="date" tickFormatter={(date) => moment(date).format("MMM YY")} />
        <YAxis tickFormatter={(value) => `${numberToShortString(value)}`} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};


function numberToShortString(number) {
  if (number >= 1e9) {
    return `${(number / 1e9).toFixed(1)}B`; // Billions
  } else if (number >= 1e6) {
    return `${(number / 1e6).toFixed(1)}M`; // Millions
  } else if (number >= 1e3) {
    return `${(number / 1e3).toFixed(1)}k`; // Thousands
  } else {
    return number.toString();
  }
}