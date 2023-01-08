import React from "react";
import style from "./rocketstable.module.css";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";
import DeletePopUp from "./DeletePopUp";
import * as MdIcons from "react-icons/md";
import RocketDetails from "./RocketDetails";
import useRockets from "../../../hooks/useRockets";
import ModifyPopUp from "./ModifyPopup";
export default function RocketsTable(props) {
  const { deleteRocket, rockets, modifyRocket } = useRockets();
  console.log(rockets);
  const [deleteRecord, setDeleteRecord] = React.useState({});
  const [deletePopup, setDeletePopup] = React.useState(false);
  const [detailsPopup, setDetailsPopup] = React.useState(false);
  const [selectedRocket, setSelectedRocket] = React.useState({});
  const [modifyPopup, setModifyPopup] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [modifiedRecord, setModifyRecord] = React.useState(selectedRocket);
  const handleDelete = async () => {
    const res = await deleteRocket(deleteRecord.id);
    console.log(res);
  };

  const handleModify = async (rocket) => {
    const res = await modifyRocket(rocket);
    console.log(res);
  };
  return (
    <section className={style.rocketsTableSection}>
      <label htmlFor="" style={{ marginRight: "30px" }}>
        Search Rockets
      </label>
      <input
        type="text"
        placeholder="Search Rockets"
        className="inputControl"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className={style.tableContainer}>
        <table className={style.rocketsTable}>
          <thead>
            <tr>
              <th>Operation</th>
              <th>Name</th>
              <th>Type</th>
              <th>Weight</th>
              <th>Capacity</th>
              <th>Mass</th>
              <th>Momentum</th>
            </tr>
          </thead>
          <tbody>
            {rockets
              .filter((rocket) =>
                rocket.rocket_name.match(new RegExp(searchValue, "i"))
              )
              .map((rocket) => {
                return (
                  <tr>
                    <td>
                      <AiIcons.AiFillDelete
                        onClick={(e) => {
                          setDeleteRecord(rocket);
                          setDetailsPopup(false);
                          setDeletePopup(true);
                        }}
                        className={`${style.icon} ${style.delete}`}
                      />
                      <TbIcons.TbListDetails
                        onClick={(e) => {
                          setDeletePopup(false);
                          setSelectedRocket(rocket);
                          setDetailsPopup(true);
                        }}
                        className={`${style.icon}  ${style.details}`}
                      />
                      <MdIcons.MdOutlineUpdate
                        onClick={(e) => {
                          setDeletePopup(false);
                          setSelectedRocket(rocket);
                          setModifyPopup(true);
                        }}
                        className={`${style.icon} ${style.edit}`}
                      />
                    </td>
                    <td>{rocket.rocket_name}</td>
                    <td>{rocket.rocket_type}</td>
                    <td>{rocket.weight} lb</td>
                    <td>{rocket.capacity}</td>
                    <td>{rocket.mass}</td>
                    <td>{rocket.momentum}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {detailsPopup && (
        <RocketDetails
          rocket={selectedRocket}
          setDetailsPopup={setDetailsPopup}
        />
      )}
      {modifyPopup && (
        <ModifyPopUp
          obj={selectedRocket}
          setModifyPopup={setModifyPopup}
          setModifyRecord={setModifyRecord}
          handleModify={handleModify}
        />
      )}
      {deletePopup && (
        <DeletePopUp
          handleDelete={handleDelete}
          name={deleteRecord.rocket_name}
          setDeletePopup={setDeletePopup}
        />
      )}
    </section>
  );
}
