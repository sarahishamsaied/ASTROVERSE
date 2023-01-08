import { useCallback, useEffect, useState } from "react";

import { httpGetLaunches, httpSubmitLaunch, httpAbortLaunch } from "./requests";
import launchesData from "./launches";
function useLaunches(onSuccessSound, onAbortSound, onFailureSound) {
  const [launches, saveLaunches] = useState([]);
  const [isPendingLaunch, setPendingLaunch] = useState(false);

  const getLaunches = useCallback(async () => {
    const fetchedLaunches = await httpGetLaunches();
    console.log(fetchedLaunches);
    saveLaunches(fetchedLaunches);
  }, []);

  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  const submitLaunch = async (launchData) => {
    console.log(launchData);
    const response = await httpSubmitLaunch(launchData);
    console.log(response);
  };

  const abortLaunch = useCallback(
    async (id) => {
      const response = await httpAbortLaunch(id);

      // TODO: Set success based on response.
      const success = false;
      if (success) {
        getLaunches();
        onAbortSound();
      } else {
        onFailureSound();
      }
    },
    [getLaunches, onAbortSound, onFailureSound]
  );

  return {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
    getLaunches,
  };
}

export default useLaunches;
