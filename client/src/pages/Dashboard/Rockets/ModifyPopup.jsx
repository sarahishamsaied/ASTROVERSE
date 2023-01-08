import { Button } from "arwes";
import React from "react";
import style from "./rocketstable.module.css";
export default function ModifyPopUp({
  obj,
  setModifyRecord,
  setModifyPopup,
  handleModify,
}) {
  const [message, setMessage] = React.useState("");
  const [updatedRocket, setUpdatedRocket] = React.useState(obj);
  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      setModifyRecord(updatedRocket);
      setMessage("Modifying");
      handleModify(updatedRocket);
      console.log(updatedRocket);
      setMessage("Modified");
    } catch (error) {
      console.log(error);
      setMessage("Error");
    }
  };
  return (
    <div className={style.modifyPopupContainer}>
      <h1>Modify Rocket</h1>
      <form className={style.modifyRocketContainer}>
        <div className={style.formRow}>
          <label htmlFor="">Rocket Name</label>
          <input
            type="text"
            placeholder={`${obj.rocket_name}`}
            className="inputControl"
            onChange={(e) =>
              setUpdatedRocket({
                ...updatedRocket,
                rocket_name: e.target.value,
              })
            }
          />
        </div>
        <div className={style.formRow}>
          <label htmlFor="">Rocket Type</label>
          <input
            type="text"
            placeholder={`${obj.rocket_type}`}
            className="inputControl"
            onChange={(e) =>
              setUpdatedRocket({
                ...updatedRocket,
                rocket_type: e.target.value,
              })
            }
          />
        </div>
        <div className={style.formRow}>
          <label htmlFor="">Rocket Weight</label>
          <input
            type="text"
            placeholder={`${obj.weight}}`}
            className="inputControl"
            onChange={(e) =>
              setUpdatedRocket({ ...updatedRocket, weight: e.target.value })
            }
          />
        </div>
        <div className={style.formRow}>
          <label htmlFor="">Rocket Capacity</label>
          <input
            type="text"
            placeholder={`${obj.capacity}}`}
            className="inputControl"
            onChange={(e) =>
              setUpdatedRocket({ ...updatedRocket, capacity: e.target.value })
            }
          />
        </div>
        <div className={style.formRow}>
          <label htmlFor="">Rocket Mass</label>
          <input
            type="text"
            placeholder={`${obj.mass}`}
            className="inputControl"
            onChange={(e) =>
              setUpdatedRocket({ ...updatedRocket, mass: e.target.value })
            }
          />
        </div>
        <div className={style.formRow}>
          <label htmlFor="">Rocket Momentum</label>
          <input
            type="text"
            placeholder={`${obj.momentum}`}
            className="inputControl"
            onChange={(e) =>
              setUpdatedRocket({ ...updatedRocket, momentum: e.target.value })
            }
          />
        </div>
        <div className={style.formRow}>
          <label htmlFor="">Rocket Velocity</label>
          <input
            type="text"
            placeholder={obj.velocity}
            className="inputControl"
            onChange={(e) =>
              setUpdatedRocket({ ...updatedRocket, velocity: e.target.value })
            }
          />
        </div>
        <div className={style.formRow}>
          <label htmlFor="">Rocket Fuel</label>
          <input
            type="text"
            placeholder={obj.fuel}
            className="inputControl"
            onChange={(e) =>
              setUpdatedRocket({ ...updatedRocket, fuel: e.target.value })
            }
          />
        </div>
        <div className={style.formRow}>
          <label htmlFor="">Rocket Thrust</label>
          <input
            type="text"
            placeholder={obj.thrust}
            className="inputControl"
            onChange={(e) =>
              setUpdatedRocket({ ...updatedRocket, thrust: e.target.value })
            }
          />
        </div>
        <Button type="submit" onClick={handleSubmit}>
          Update
        </Button>
        <Button type="submit" onClick={() => setModifyPopup(false)}>
          Cancel
        </Button>
        <p>{message}</p>
      </form>
    </div>
  );
}
