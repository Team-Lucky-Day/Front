import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const MyMenuChart = () => {
  const [series] = useState([
    {
      name: "Coffee",
      data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
      name: "Beverage",
      data: [12, 11, 14, 18, 17, 13, 13],
    },
    {
      name: "Desert",
      data: [20, 22, 27, 38, 37, 25, 37],
    },
  ]);

  const [options] = useState({
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#504538", "#B7A99A", "#827567"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "My ordered menu chart",
      align: "left",
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: {
        text: "Month",
      },
    },
    yaxis: {
      title: {
        text: "Number of orders",
      },
      min: 5,
      max: 40,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  });

  return (
    <div id="chart">
      {/* <div>이 곳에서 메뉴 현황을 체크해보세요!</div> */}
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        width={1000}
        height={450}
      />
    </div>
  );
};

export default MyMenuChart;
