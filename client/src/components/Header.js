import {
  Logo,
  Words,
  Header as ArwesHeader,
  Highlight,
  withStyles,
} from "arwes";
import { Link } from "react-router-dom";
import Clickable from "./Clickable";
import Centered from "./Centered";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    lineHeight: "80px",
    // padding: "10px",
    justifyContent: "flex-start",
    alignItems: "center",
    // boxShadow: "0 30px 20px black",
  },
  navContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
    padding: "10px",
  },
  logo: {
    display: "inherit",
    marginTop: "15px",
  },
  nav: {
    display: "inherit",
  },
  banner: {
    display: "inherit",
    fontWeight: "bold",
    marginLeft: "10px",
    marginRight: "15px",
    fontSize: 28,
  },
  clickable: {
    fontSize: 21,
    "& i": {
      marginRight: theme.padding / 2,
      fontSize: 21,
    },
  },
  leftSection: {
    fontSize: 21,
    marginLeft: "auto",
    "& i": {
      marginRight: theme.padding / 2,
      fontSize: 21,
    },
  },
  link: {
    color: theme.color.content,
    textDecoration: "none",
  },
  button: {
    padding: [0, theme.padding / 2],
  },
  "@media (max-width: 800px)": {
    logo: {
      display: "none",
    },
    img: {
      display: "none",
    },
    banner: {
      display: "none",
    },
    button: {
      padding: [0, 8],
    },
  },
  "@media (min-width:320px) and (max-width:560px)": {
    button: {
      padding: [0, 4],
    },
    clickable: {
      fontSize: 12,
    },
  },
});
const SignedInLinks = (props) => {};
const Header = (props) => {
  const user = useSelector((state) => state.user);
  const token = Cookies.get("token");

  const { classes, onNav, ...rest } = props;
  return (
    <nav className={classes.navContainer}>
      <div className={classes.root}>
        <Logo animate size={50} className={classes.logo} layer="header" />
        <Words animate className={classes.banner}>
          ASTROVERSE
        </Words>
        <nav className={`${classes.nav}`}>
          <Clickable className={classes.clickable} onClick={onNav}>
            <Highlight className={classes.button} animate layer="header">
              <Link className={classes.link} to="/dashboard">
                <i className="material-icons">check_circle_outline</i>Dashboard
              </Link>
            </Highlight>
          </Clickable>
          <Clickable className={classes.clickable} onClick={onNav}>
            <Highlight className={classes.button} animate layer="header">
              <Link className={classes.link} to="/upcoming">
                <i className="material-icons">update</i>Upcoming
              </Link>
            </Highlight>
          </Clickable>
          <Clickable className={classes.clickable} onClick={onNav}>
            <Highlight className={classes.button} animate layer="header">
              <Link className={classes.link} to="/history">
                <i className="material-icons">history</i>History
              </Link>
            </Highlight>
          </Clickable>
        </nav>
      </div>
      <div className={classes.leftSection + classes.nav}>
        <Clickable className={classes.leftSection} onClick={onNav}>
          <Highlight className={classes.button} animate layer="header">
            {user.isAuthenticated || token ? (
              <Link className={classes.link} to="/history">
                <i className="material-icons">user</i>Hisham, Sarah
              </Link>
            ) : (
              ""
            )}
          </Highlight>
        </Clickable>
      </div>
    </nav>
  );
};

export default withStyles(styles)(Header);
