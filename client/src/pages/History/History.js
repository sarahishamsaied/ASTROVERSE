import { useMemo } from "react";
import { Appear, Table, Paragraph } from "arwes";
import historyData from "../../hooks/history.data";
const History = (props) => {
  const tableBody = useMemo(() => {
    console.log(historyData);
    return historyData
      ?.filter((launch) => !launch.upcoming)
      .map((launch, index) => {
        return (
          <tr key={String(launch.flightNumber)}>
            <td>{index}</td>
            <td>{launch.mission_name}</td>
            <td>{launch.rocket_name}</td>
            {/* <td>{new Date(launch.launchDate).toDateString()}</td> */}
            <td>{launch.planet}</td>
            <td>
              {launch.lat} <sup>o</sup> {launch.lng} <sup>o</sup>
            </td>
            <td>{launch.launch_date}</td>
          </tr>
        );
      });
  }, [props.launches]);

  return (
    <article id="history">
      <Appear animate show={props.entered}>
        <Paragraph>
          History of mission launches including SpaceX launches starting from
          the year 2006.
        </Paragraph>
        <Table animate>
          <table style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{ width: "3rem" }}>No.</th>
                <th style={{ width: "10rem" }}>Mission Name</th>
                <th style={{ width: "11rem" }}>Rocket Name</th>
                <th style={{ width: "11rem" }}>Exoplanet</th>
                <th style={{ width: "17rem" }}>Destination on Exoplanet</th>
                <th style={{ width: "11rem" }}>Launch Date</th>
              </tr>
            </thead>
            <tbody>{tableBody}</tbody>
          </table>
        </Table>
      </Appear>
    </article>
  );
};

export default History;
