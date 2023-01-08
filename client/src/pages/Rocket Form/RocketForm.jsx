import { Appear, Button, Frame, Paragraph, Words } from "arwes";
import Blockquote from "arwes/lib/Blockquote";
import Heading from "arwes/lib/Heading";
import React, { useState } from "react";
import useRockets from "../../hooks/useRockets";
import style from "./rocketform.module.css";
import RocketPreview from "./RocketPreview";
import { rocketQuestions } from "./rocketQuestions";
import SolidRocket from "./SolidRocket";
export default function RocketForm({ entered }) {
  const [addedRocket, setaddedRocket] = useState(false);
  const [rocketType, setRocketType] = useState("liquid");
  const { addRocket } = useRockets();
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");
  const onChangeInputs = (e, element) => {
    console.log(e.target.value);
    console.log(element.name);
    let obj = {};
    obj[`${element.name}`] = e.target.value;
    setInputs({ ...inputs, ...obj });
    console.log(inputs);
  };
  const addedRocketHandler = async () => {
    try {
      const res = await addRocket({
        ...inputs,
        rocket_type: rocketType,
      });
      console.log(res);
      setaddedRocket(!addedRocket);
      setMessage("Rocket added successfully");
    } catch (error) {
      console.log(error);
      setMessage("An error occurred");
    }
  };
  const onChangeRocketTypeHandler = (e) => {
    if (e.target.value === "Solid Fuel Rocket") setRocketType("solid");
    if (e.target.value === "Liquid Fuel Rocket") setRocketType("liquid");
  };
  return (
    <Appear id="rocketForm" animate show={entered} className={style.wrapper}>
      <div className={style.wrapper}>
        <div className={style.rocketForm}>
          <Heading as="h1">
            <Words>Add Rocket</Words>
          </Heading>
          {rocketQuestions.map((element) => {
            return (
              <div className={"formRow"}>
                <label>{element.label}</label>
                {element.name === "rocket_type" ? (
                  <select
                    name={element.name}
                    id={element.id}
                    className="inputControl"
                    onChange={onChangeRocketTypeHandler}
                  >
                    {element.options.map((option) => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={element.type}
                    name={element.name}
                    id={element.id}
                    className="inputControl"
                    placeholder={element.placeholder}
                    onChange={(e) => onChangeInputs(e, element)}
                  />
                )}
              </div>
            );
          })}
          <Button
            onClick={addedRocketHandler}
            pallette={addedRocket ? "error" : "primary"}
          >
            Add Rocket
          </Button>
          {message && <p>{message}</p>}
        </div>
        {rocketType === "liquid" ? <RocketPreview /> : <SolidRocket />}
      </div>
    </Appear>
  );
}
