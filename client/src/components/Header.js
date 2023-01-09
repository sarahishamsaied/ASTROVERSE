import {
  Logo,
  Words,
  Header as ArwesHeader,
  Highlight,
  withStyles,
} from "arwes";
import { Link, useNavigate } from "react-router-dom";
import Clickable from "./Clickable";
import Centered from "./Centered";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "../features/users/userSlice";
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
const SignedOutLinks = (props) => {
  const { classes, onNav, ...rest } = props;
  return (
    <nav className={classes.nav}>
      <Clickable className={classes.clickable} onClick={onNav}>
        <Highlight className={classes.button} animate layer="header">
          <Link className={classes.link} to="/users/auth/login">
            <i className="material-icons">check_circle_outline</i>Sign In
          </Link>
        </Highlight>
      </Clickable>
      <Clickable className={classes.clickable} onClick={onNav}>
        <Highlight className={classes.button} animate layer="header">
          <Link className={classes.link} to="/users/auth/register">
            <i className="material-icons">check_circle_outline</i>Register
          </Link>
        </Highlight>
      </Clickable>
    </nav>
  );
};
const SignedInLinks = (props) => {
  const { classes, onNav, ...rest } = props;
  return (
    <nav className={classes.nav}>
      <Clickable className={classes.clickable} onClick={onNav}>
        <Highlight className={classes.button} animate layer="header">
          <Link className={classes.link} to="/dashboard">
            <i className="material-icons">check_circle_outline</i>Dashboard
          </Link>
        </Highlight>
      </Clickable>
      <Clickable className={classes.leftSection} onClick={onNav}>
        <Highlight className={classes.button} animate layer="header">
          {props.user.isAuthenticated || props.token ? (
            <Link className={classes.link} to="/dashboard">
              <i className="material-icons">user</i>
              {props.user.first_name} {props.user.last_name}
            </Link>
          ) : (
            ""
          )}
        </Highlight>
      </Clickable>
      <Clickable className={classes.clickable} onClick={onNav}>
        <Highlight className={classes.button} animate layer="header">
          <Link className={classes.link} onClick={() => props.handleLogout()}>
            <i className="material-icons">check_circle_outline</i>Logout
          </Link>
        </Highlight>
      </Clickable>
    </nav>
  );
};
const Header = (props) => {
  const user = useSelector((state) => state.user);
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("token");
    navigate("/auth/users/login");
  };
  const { classes, onNav, ...rest } = props;
  return (
    <nav className={classes.navContainer}>
      <div className={classes.root}>
        <Logo animate size={50} className={classes.logo} layer="header" />
        <Words animate className={classes.banner}>
          ASTROVERSE
        </Words>
        <nav className={`${classes.nav}`}>
          {user.isAuthenticated || token ? (
            <SignedInLinks
              classes={classes}
              onNav={onNav}
              user={user}
              token={token}
              handleLogout={handleLogout}
            />
          ) : (
            <SignedOutLinks classes={classes} onNav={onNav} />
          )}
        </nav>
      </div>
      <div className={classes.leftSection + classes.nav}></div>
    </nav>
  );
};

export default withStyles(styles)(Header);
