import { useMemo } from "react";
import { withStyles, Appear, Link, Paragraph, Table, Words } from "arwes";

import Clickable from "../../components/Clickable";

const styles = () => ({
  link: {
    color: "red",
    textDecoration: "none",
  },
});
const checkUpcoming = (launch) => {
  const current = new Date();
  const date = new Date(launch.launch_date);
  console.log(current.getUTCDate(), date.getUTCDate());
  if (date.getFullYear() >= current.getFullYear()) {
    if (date.getMonth() >= current.getMonth()) {
      if (date.getUTCDate() >= current.getUTCDate()) {
        console.log("true");
        return true;
      }
    }
  }
  return false;
};
const Upcoming = (props) => {
  const { entered, launches, classes, abortLaunch } = props;
  const tableBody = useMemo(() => {
    return launches.data?.filter(checkUpcoming).map((launch, index) => {
      return (
        <tr key={String(launch.flightNumber)}>
          <td>
            <Clickable style={{ color: "red" }}>
              <Link
                className={classes.link}
                onClick={() => abortLaunch(launch.flightNumber)}
              >
                ✖
              </Link>
            </Clickable>
          </td>
          <td>{index}</td>
          <td>{launch.mission_name}</td>
          <td>{launch.rocket_id}</td>
          {/* <td>{new Date(launch.launchDate).toDateString()}</td> */}
          <td>{launch.planet_id}</td>
          <td>
            {launch.lat} <sup>o</sup> {launch.lng} <sup>o</sup>
          </td>
          <td>{launch.launch_date}</td>
        </tr>
      );
    });
  }, [launches, abortLaunch, classes.link]);

  return (
    <Appear id="upcoming" animate show={entered}>
      <Paragraph>Astroverse's Upcoming Launches</Paragraph>
      <Words animate>Warning! Clicking on the ✖ aborts the mission.</Words>
      <Table animate show={entered}>
        <table style={{ tableLayout: "fixed" }}>
          <thead>
            <tr>
              <th style={{ width: "3rem" }}></th>
              <th style={{ width: "3rem" }}>No.</th>
              <th style={{ width: "10rem" }}>Mission Name</th>
              <th style={{ width: "11rem" }}>Rocket ID</th>
              <th style={{ width: "11rem" }}>Planet ID</th>
              <th style={{ width: "17rem" }}>Destination on Exoplanet</th>
              <th style={{ width: "11rem" }}>Launch Date</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </Table>
    </Appear>
  );
};

export default withStyles(styles)(Upcoming);
