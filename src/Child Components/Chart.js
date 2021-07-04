import React from "react";
import { Bar } from "react-chartjs-2";

export default function Chart(props) {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Left In",
        backgroundColor: "#ff6384",
        borderColor: "#ff6384",
        borderWidth: 1,
        hoverBackgroundColor: "#eb4f70",
        hoverBorderColor: "#d73b5c",
        data: [65, 59, 80, 81, 56, 520, 40, 20, 69, 100],
      },

      {
        label: "Right In",
        backgroundColor: "rgba(155,231,91,1)",
        borderColor: "rgba(155,231,91,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(95,171,31,1)",
        hoverBorderColor: "rgba(95,171,31,1)",
        data: [45, 79, 50, 41, 16, 85, 20, 12, 24, 1],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: true,
      position: "bottom",
      labels: {
        defaultFontColor: "",
      },
    },
    type: "bar",
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            fontColor: "rgba(255,255,255,1)",
          },
          gridLines: {
            color: "rgba(255,255,255,0.4)",
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            fontColor: "rgba(255,255,255,1)",
          },
          gridLines: {
            color: "rgba(255,255,255,0.4)",
          },
        },
      ],
    },
  };

  return (
    <React.Fragment>
      <Bar flex="1" data={data} options={options} />
    </React.Fragment>
  );
}
