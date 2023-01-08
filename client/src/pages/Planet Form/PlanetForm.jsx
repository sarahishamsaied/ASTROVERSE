import { Blockquote, Button, Frame, Words } from "arwes";
import React, { useState } from "react";
import MyGlobe from "../../components/MyGlobe";
import style from "./planet.module.css";
import { planetQuestions } from "./planetQuestions";
import ValidatePlanet from "./ValidatePlanet";
import Uplaod from "../../Cloudinary/Uplaod";
import usePlanets from "../../hooks/usePlanets";
export default function PlanetForm() {
  const { addPlanet } = usePlanets();

  const [inputs, setInputs] = useState({});
  const [globeImageUrl, setImg] = useState("/img/earth-night.jpg");
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const onChangeInputs = (e, element) => {
    console.log(e.target.value);
    console.log(element.name);
    let obj = {};
    obj[`${element.name}`] = e.target.value;
    setInputs({ ...inputs, ...obj });
    console.log(inputs);
  };
  const renderImg = (e) => {
    console.log(e);
    setImg(e);
  };

  const handleSubmit = async () => {
    console.log(inputs);
    setInputs({ ...inputs, map_image: globeImageUrl });
    const res = await addPlanet(inputs);
    console.log(res);
  };
  return (
    <div>
      <h1>
        <Blockquote>
          <Words>Add Planet</Words>
        </Blockquote>
      </h1>
      <div className={style.planetsForm}>
        {planetQuestions.map((element) => {
          return (
            <div className={"formRow"}>
              <label>{element.label}</label>
              <input
                className={"inputControl"}
                type={element.type}
                id={element.id}
                name={element.name}
                placeholder={element.placeholder}
                onChange={(e) => onChangeInputs(e, element)}
              />
              {errors[element.name] ? (
                <div className={style.error}>{errors[element.name]}</div>
              ) : (
                ""
              )}
            </div>
          );
        })}
        <div className="formRow">
          <label>Image</label>
          <Uplaod
            setImg={setImg}
            setPreviewSource={setPreviewSource}
            setSuccessMsg={setSuccessMsg}
            setErrMsg={setErrMsg}
          />
        </div>
        <Button
          className={style.addPlanetButton}
          animate
          onClick={handleSubmit}
        >
          Add Planet
        </Button>
        {Object.keys(errors) !== 0 ? (
          <div className={style.error}>Please fill all inputs</div>
        ) : (
          ""
        )}
      </div>

      <Frame>
        <h1>
          <Blockquote>Preview Planet</Blockquote>
        </h1>
        <div className={style.previewPlanet}>
          <div className={style.planetData}>
            {planetQuestions.map((element) => {
              return (
                <div>
                  <span className={style.specialLabel}>{element.label}:</span>{" "}
                  {inputs[element.name]}
                  {element.name === "imgUrl" ? (
                    <Button
                      onClick={(e) => renderImg(inputs[element.name])}
                      className={style.addPlanetButton}
                    >
                      Render Image
                    </Button>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
          <Frame className={style.planet}>
            <MyGlobe
              width={900}
              globeImageUrl={globeImageUrl}
              backgroundImageUrl="/img/night-sky.png"
            />
          </Frame>
        </div>
      </Frame>
    </div>
  );
}
