import { useCallback, useEffect, useState } from "react";
import {
  httpGetAllRockets,
  httpDeleteRocket,
  httpModifyRocket,
  httpSubmitRocket,
} from "./requests";

function useRockets() {
  const [rockets, saveRockets] = useState([]);
  const getRockets = useCallback(async () => {
    const fetchedRockets = await httpGetAllRockets();
    console.log(fetchedRockets);
    saveRockets(fetchedRockets);
  }, []);
  const addRocket = async (rocket) => {
    const res = await httpSubmitRocket(rocket);
    console.log(res);
    getRockets();
  };
  const deleteRocket = async (id) => {
    const res = await httpDeleteRocket(id);
    console.log(res);
    getRockets();
  };
  const modifyRocket = async (newRocketData) => {
    const res = await httpModifyRocket(newRocketData);
    console.log(res);
    getRockets();
  };
  useEffect(() => {
    getRockets();
  }, [getRockets]);
  return { rockets, deleteRocket, modifyRocket, addRocket };
}
export default useRockets;
