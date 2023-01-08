import { List, Paragraph } from "arwes";
import React, { useState } from "react";
import Clickable from "../../components/Clickable";
import list from "./sidebar.list";
import styles from "./dashboard.module.css";

export default function Sidebar({ setChosenPage }) {
  function handleClick(element) {
    setChosenPage(element.value);
  }
  return (
    <div className={styles.list}>
      <Clickable>
        <List>
          {list.map((element) => (
            <li
              className={styles.listItem}
              onClick={() => handleClick(element)}
              key={element.value}
            >
              {element.label}
            </li>
          ))}
        </List>
      </Clickable>
    </div>
  );
}
