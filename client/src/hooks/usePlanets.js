import { useCallback, useEffect, useState } from "react";

import { httpGetPlanets, httpAddPlanet, httpDeletePlanet } from "./requests";

function usePlanets() {
  const [planets, savePlanets] = useState([]);

  const getPlanets = useCallback(async () => {
    const fetchedPlanets = await httpGetPlanets();
    savePlanets(fetchedPlanets);
    return fetchedPlanets;
  }, []);
  const addPlanet = useCallback(async (planet) => {
    const addedPlanet = await httpAddPlanet(planet);
    await getPlanets();
    return addedPlanet;
  }, []);
  const deletePlanet = useCallback(async (id) => {
    const deletedPlanet = await httpDeletePlanet(id);
    await getPlanets();
    return deletedPlanet;
  }, []);
  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return { planets, addPlanet, getPlanets, deletePlanet };
}

export default usePlanets;
