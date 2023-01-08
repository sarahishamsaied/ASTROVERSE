import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Frame, Header } from "arwes";
import useAdmins from "../../hooks/useAdmins";
// import MyGlobe from "../../components/MyGlobe";
import styles from "./dashboard.module.css";
import Chart from "react-apexcharts";

let initialState = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  },
  chart: {
    width: 600,
    type: "bar",
  },
  colors: ["#FF1654", "#247BA0"],
  series: [
    {
      name: "Users per month",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
  labels: {
    style: {
      colors: "#247BA0",
    },
  },
};
export default function BarChart({ title, dataset }) {
  const [users, setUsers] = useState([]);
  const { getRegisteredUsers } = useAdmins();
  let [state, setState] = useState(initialState);
  var pad_array = function (arr, len, fill) {
    return arr.concat(Array(len).fill(fill)).slice(0, len);
  };
  const getAllRegisteredUsersPerMonth = async () => {
    const res = await getRegisteredUsers();
    let filtered = res.map((element) => Number(element.count));
    filtered = pad_array(filtered, 12, 0);
    setUsers(filtered);
    setState({
      ...state,
      series: [
        {
          name: "User Per Month",
          data: filtered,
        },
      ],
    });
  };
  useEffect(() => {
    getAllRegisteredUsersPerMonth();
  }, []);
  return (
    <section className={styles.barChartContainer}>
      <Header>{title}</Header>
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="445"
      />
    </section>
  );
}
