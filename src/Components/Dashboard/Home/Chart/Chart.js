import React from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import './Chart.css';
const data = [
  {
    year: "Jan",
    visit: 590,
    online: 450,
    Reg: 130,
  },
  {
    year: "Feb",
    visit: 750,
    online: 658,
    Reg: 70,
  },
  {
    year: "Mar",
    visit: 890,
    online: 560,
    Reg: 350,
  },
  {
    year: "Apr",
    visit: 1500,
    online: 654,
    Reg: 90,
  },
  {
    year: "May",
    visit: 360,
    online: 268,
    Reg: 169,
  },
  {
    year: "Jun",
    visit: 469,
    online: 256,
    Reg: 69,
  },
  {
    year: "Jul",
    visit: 697,
    online: 450,
    Reg: 25,
  },
  {
    year: "Aug",
    visit: 489,
    online: 269,
    Reg: 25,
  },
  {
    year: "Sep",
    visit: 598,
    online: 487,
    Reg: 261,
  },
  {
    year: "Nov",
    visit: 398,
    online: 246,
    Reg: 51,
  },
  {
    year: "Dec",
    visit: 369,
    online: 268,
    Reg: 150,
  },
];
export const Chart = () => {
  return (
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="year"
        label={{position: "insideBottomRight", offset: 0 }}
        scale="band"
      />
      <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="visit" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="online" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="Reg" stroke="#ff7300" />
    </ComposedChart>
  );
};
