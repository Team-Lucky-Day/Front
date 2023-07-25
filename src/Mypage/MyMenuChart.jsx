import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const MyMenuChart = () => {

  const [coffeeData, setCoffeeData] = useState([]);
  const [beverageData, setBeverageData] = useState([]);
  const [dessertData, setDessertData] = useState([]);

  useEffect( () => {
    const data = localStorage.getItem("authorization");
    axios({
      url : "http://localhost:8080/user/orderChart",
      method : "post",
      baseURL : "http://localhost:3000/Mypage",
      headers : { Authorization : data},
    }).then( response => {
      console.log("차트정보 요청 성공!!");
      console.log("Response Data >>> " + response.data);
    

      var coffeeArray = new Array(12).fill(0);
      var beverageArray = new Array(12).fill(0);
      var dessertArray = new Array(12).fill(0);
    
      for( const [month, items] of Object.entries(response.data)){
        
        for(const [category, count] of Object.entries(items)){
          console.log(category + " : " + count);
          if(category === "coffee") {
            coffeeArray[month - 1] = count;
          }else if(category === "beverage"){
            beverageArray[month - 1] = count;
          }else{
            dessertArray[month - 1] = count;
          }
        }
      }
console.log("커피 배열 데이터 타입"+typeof(coffeeArray));
      setCoffeeData(Object.values(coffeeArray));
      setBeverageData(beverageArray);
      setDessertData(dessertArray);
      

      // setResponseSucess(true);
    }).catch( error => {
      console.log("ERROR >>> " + error);
    })

  
  },[])


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
      categories: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      title: {
        text: "Month",
      },
    },
    yaxis: {
      title: {
        text: "Number of orders",
      },
      min: 0,
      max: 20,
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
        series={[
          {
            name : "Coffee",
            data : coffeeData,
          },
          {
            name: " Beverage",
            data : beverageData,
          },
          {
            name : "Dessert",
            data : dessertData,
          },
        ]}
        type="line"
        width={1000}
        height={450}
      />
    </div>
  );
};

export default MyMenuChart;
