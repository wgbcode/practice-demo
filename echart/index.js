const grandson3 = document.querySelector(".grandson3");
const grandson4 = document.querySelector(".grandson4");
const grandsonMain11 = document.querySelector(".main11");
const grandsonMain12 = document.querySelector(".main12");
const myChart3 = echarts.init(grandson3);
const myChart4 = echarts.init(grandson4);
const myChartMain11 = echarts.init(grandsonMain11);
const myChartMain12 = echarts.init(grandsonMain12);
let option3;
let option4;
let optionMain11;
let optionMain12;
option3 = {
  grid: {
    top: "15%",
    bottom: "5%",
    left: "2%",
    right: "2%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [
        120,
        {
          value: 200,
          itemStyle: {
            color: "#a90000",
          },
        },
        150,
        80,
        70,
        110,
        130,
        120,
        {
          value: 200,
          itemStyle: {
            color: "#a90000",
          },
        },
        150,
        80,
        70,
        110,
        130,
      ],
      type: "bar",
    },
  ],
};
option4 = {
  grid: {
    top: "15%",
    bottom: "5%",
    left: "2%",
    right: "2%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [70, 110, 130],
      type: "bar",
    },
  ],
};
optionMain11 = {
  series: [
    {
      type: "pie",
      radius: "90%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
      label: {
        show: false,
      },
    },
  ],
};
optionMain12 = {
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};
myChart3.setOption(option3);
myChart4.setOption(option4);
myChartMain11.setOption(optionMain11);
myChartMain12.setOption(optionMain12);
window.onresize = function () {
  myChart3.resize();
  myChart4.resize();
  myChartMain11.resize();
  myChartMain12.resize();
};
