import { Header } from "arwes";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import useAdmins from "../../hooks/useAdmins";
import useLaunches from "../../hooks/useLaunches";
import useTasks from "../../hooks/useTasks";
import style from "./dashboard.module.css";
export default function LineChart({ title }) {
  const { launches } = useLaunches();
  const { getTasksMonthly } = useTasks();
  const [state, setState] = React.useState([]);
  const [tasksCount, setTasksCount] = React.useState([]);
  const { getRegisteredUsers } = useAdmins();
  var pad_array = function (arr, len, fill) {
    return arr.concat(Array(len).fill(fill)).slice(0, len);
  };
  const getAllRegisteredUsers = async () => {
    const res = await getRegisteredUsers();
    console.log(res);
    let filtered = res.map((element) => Number(element.month));
    filtered = pad_array(filtered, 12, 0);
    setState(filtered);
  };
  const getTasks = async () => {
    const res = await getTasksMonthly();
    console.log(res);
    console.log("here");
    let filtered = res.map((element) => Number(element.month));
    console.log(filtered);
    filtered = pad_array(filtered, 12, 0);
    console.log(filtered);
    setTasksCount(filtered);
  };
  useEffect(() => {
    getAllRegisteredUsers();
    getTasks();
  }, []);
  var options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF1654", "#247BA0"],
    series: [
      {
        name: "Users",
        data: state,
      },
      {
        name: "Tasks",
        data: tasksCount,
      },
    ],
    stroke: {
      width: [4, 4],
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#FF1654",
        },
        labels: {
          style: {
            colors: "#FF1654",
          },
        },
        title: {
          text: "Users",
          style: {
            color: "#FF1654",
          },
        },
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "#247BA0",
        },
        labels: {
          style: {
            colors: "#247BA0",
          },
        },
        title: {
          text: "Tasks",
          style: {
            color: "#247BA0",
          },
        },
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
  };

  return (
    <div className={style.lineChartContainer}>
      <Header>{title}</Header>
      <Chart
        options={options}
        series={options.series}
        type="line"
        width="500"
      />
    </div>
  );
}
