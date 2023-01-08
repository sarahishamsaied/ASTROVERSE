import React from "react";
import style from "./launch.module.css";
import { useState } from "react";
export default function CrewPopup({ list, setSelectedCrew }) {
  const [dynamicList, setDynamicList] = useState(list);
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    if (e.target.value === "") {
      setDynamicList(list);
      return;
    }
    setDynamicList(list);
    setSearch(e.target.value);
    console.log(e.target.value);
    console.log(dynamicList);
    let changed = dynamicList.filter((element) =>
      element.username.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(changed);
    setDynamicList(changed);
  };
  return (
    <div className={style.crewPopup}>
      <h3>Crew</h3>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search"
        onChange={(e) => handleChange(e)}
      />
      <ul>
        {dynamicList.map((item) => (
          <li
            onClick={() => setSelectedCrew((prev) => [...prev, item.username])}
          >
            <span className={style.profileIcon}>{item.username[0]}</span>
            {item.username}
          </li>
        ))}
      </ul>
    </div>
  );
}
