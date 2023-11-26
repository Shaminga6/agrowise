// ChartData.js
export const data1 = {
  labels: ["April", "May", "June", "July", "August", "September", "October", "November", "December"],
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56],
      borderColor: "#fff",
      borderWidth: 2,
      fill: false,
    },
  ],
};

export const data2 = {
  labels: ["April", "May", "June", "July", "August", "September", "October", "November", "December"],
  datasets: [
    {
      label: "Dataset 2",
      data: [28, 48, 40, 19, 86],
      borderColor: "#fff",
      borderWidth: 2,
      fill: false,
    },
  ],
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#ffffff", // Set the label color to white
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff", // Set the label color to white
        },
      },
      y: {
        ticks: {
          color: "#ffffff", // Set the label color to white
        },
      },
    },
  },
};
