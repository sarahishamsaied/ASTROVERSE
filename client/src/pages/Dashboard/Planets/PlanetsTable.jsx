import React from "react";
import style from "./planets.module.css";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
import usePlanets from "../../../hooks/usePlanets";
import DeletePopUp from "../Rockets/DeletePopUp";
import ModifyPopUp from "../Rockets/ModifyPopup";
import PlanetDetails from "./PlanetDetails";
export default function PlanetsTable() {
  const [searchValue, setSearchValue] = React.useState([]);
  const { getPlanets, deletePlanet } = usePlanets();
  const [planets, setPlanets] = React.useState([]);
  const [deletePopup, setDeletePopup] = React.useState(false);
  const [deleteRecord, setDeleteRecord] = React.useState({});
  const [modifyPopup, setModifyPopup] = React.useState(false);
  const [selectedPlanet, setSelectedPlanet] = React.useState({});
  const [modifiedRecord, setModifyRecord] = React.useState(selectedPlanet);
  const [detailsPopup, setDetailsPopup] = React.useState(false);

  const fetchPlanets = async () => {
    const res = await getPlanets();
    setPlanets(res);
    console.log(res[0].planet_name);
    console.log(res);
  };
  const handleDelete = async () => {
    console.log(deleteRecord.id);
    const res = await deletePlanet(deleteRecord.id);
    await fetchPlanets();
    console.log(res);
  };
  React.useEffect(() => {
    fetchPlanets();
  }, []);
  return (
    <div>
      <label htmlFor="" style={{ marginRight: "30px" }}>
        Search Planets
      </label>
      <input
        type="text"
        placeholder="Search Planets"
        className="inputControl"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <table className={style.planetsTable}>
        <thead>
          <tr>
            <th>Operations</th>
            <th>NAME</th>
            <th>STRUCT</th>
            <th>MASS</th>
            <th>TEMP</th>
            <th>REV. DUR.</th>
            <th>GRAVITY</th>
          </tr>
        </thead>
        <tbody>
          {planets &&
            planets
              .filter((planet) =>
                planet.planet_name.match(new RegExp(searchValue, "i"))
              )
              .map((planet) => {
                return (
                  <tr>
                    <td>
                      <AiIcons.AiFillEdit
                        className={`${style.icon} ${style.delete}`}
                      />
                      <MdIcons.MdDelete
                        className={`${style.icon} ${style.delete}`}
                        onClick={() => {
                          setDeletePopup(true);
                          setDeleteRecord(planet);
                        }}
                      />
                      <TbIcons.TbListDetails
                        onClick={() => {
                          setDetailsPopup(true);
                          setSelectedPlanet(planet);
                        }}
                        className={`${style.icon} ${style.delete}`}
                      />
                    </td>
                    <td>{planet.planet_name}</td>
                    <td>{planet.structure}</td>
                    <td>{planet.mass}</td>
                    <td>{planet.temperature}</td>
                    <td>{planet.revolution_duration}</td>
                    <td>{planet.gravity}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
      {deletePopup && (
        <DeletePopUp
          name={deleteRecord.planet_name}
          handleDelete={handleDelete}
          setDeletePopup={setDeletePopup}
        />
      )}
      {detailsPopup && (
        <PlanetDetails
          planet={selectedPlanet}
          setDetailsPopup={setDetailsPopup}
        />
      )}
    </div>
  );
}
