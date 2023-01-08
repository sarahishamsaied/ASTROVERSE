import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Frame, withSounds, withStyles } from "arwes";
import Imports from "./AppLayoutImports";
import { httpGetAllAdmins } from "../hooks/requests";
import useAdmins from "../hooks/useAdmins";
import SignIn from "../User Pages/Auth/SignIn";
import Signup from "../User Pages/Auth/Signup";
import AddArticle from "./Article/AddArticle";
import Home from "./Home/Home";
import PlanetView from "../User Pages/Planets/PlanetView";
import ProtectedRoute from "../components/ProtectedRoute";
const {
  usePlanets,
  useLaunches,
  useArticles,
  Header,
  Footer,
  Launch,
  History,
  Upcoming,
  MyGlobe,
  PlanetForm,
  RocketForm,
  Dashboard,
  AdminLogin,
  UserHomePage,
  Articles,
  ArticleDetails,
  GhadaShehata,
  Carmen,
  useRockets,
} = Imports;
const styles = () => ({
  content: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    margin: "auto",
  },
  centered: {
    flex: 1,
    paddingTop: "20px",
    paddingBottom: "10px",
  },
});

const AppLayout = (props) => {
  const { sounds, classes } = props;

  const [frameVisible, setFrameVisible] = useState(true);
  const animateFrame = () => {
    setFrameVisible(false);
    setTimeout(() => {
      setFrameVisible(true);
    }, 600);
  };

  const onSuccessSound = () => sounds.success && sounds.success.play();
  const onAbortSound = () => sounds.abort && sounds.abort.play();
  const onFailureSound = () => sounds.warning && sounds.warning.play();
  const onGhadaShehataSound = () =>
    sounds.ghadaShehata && sounds.ghadaShehata.play();
  const onElMalekaSound = () => sounds.ghadaShehata && sounds.elMaleka.play();

  const { launches, isPendingLaunch, submitLaunch, abortLaunch } = useLaunches(
    onSuccessSound,
    onAbortSound,
    onFailureSound
  );
  const { submitArticle, articles, getArticle } = useArticles(
    onSuccessSound,
    onAbortSound,
    onFailureSound
  );
  console.log(articles);

  const { planets } = usePlanets();
  const { rockets, deleteRocket } = useRockets();
  const { admins, getUser } = useAdmins();
  return (
    <div className={classes.content}>
      <Header onNav={animateFrame} />
      <Frame
        animate
        show={frameVisible}
        corners={1}
        style={{ visibility: frameVisible ? "visible" : "hidden" }}
      >
        {(anim) => (
          <div style={{ padding: "20px" }}>
            <Routes>
              <Route exact path="/" element={<UserHomePage />} />
              <Route
                exact
                path="/launch"
                element={
                  <Launch
                    entered={anim.entered}
                    planets={planets.data}
                    submitLaunch={submitLaunch}
                    isPendingLaunch={isPendingLaunch}
                    rockets={rockets}
                    admins={admins}
                  />
                }
              />
              <Route
                exact
                path="/launch"
                element={
                  <ProtectedRoute>
                    <Launch
                      entered={anim.entered}
                      planets={planets.data}
                      submitLaunch={submitLaunch}
                      isPendingLaunch={isPendingLaunch}
                      rockets={rockets}
                      admins={admins}
                    />
                  </ProtectedRoute>
                }
              />

              <Route
                exact
                path="/upcoming"
                element={
                  <ProtectedRoute>
                    <Upcoming
                      entered={anim.entered}
                      launches={launches}
                      abortLaunch={abortLaunch}
                    />
                  </ProtectedRoute>
                }
              />

              <Route
                exact
                path="/history"
                element={
                  <ProtectedRoute>
                    <History entered={anim.entered} launches={launches} />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/globe"
                element={
                  <ProtectedRoute>
                    <MyGlobe />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/planetsform"
                element={
                  <ProtectedRoute>
                    <PlanetForm onClickSound={onGhadaShehataSound} />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/ghadashehata"
                element={<GhadaShehata onClickSound={onGhadaShehataSound} />}
              />
              <Route
                exact
                path="/carmenfarid"
                element={<Carmen onClickSound={onElMalekaSound} />}
              />
              <Route
                exact
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard rockets={rockets} />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/admin/auth/login"
                element={
                  <ProtectedRoute>
                    <AdminLogin />
                  </ProtectedRoute>
                }
              />
              <Route exact path="/users/home" element={<UserHomePage />} />
              <Route
                exact
                path="/articles"
                element={
                  <ProtectedRoute>
                    <Articles articles={articles} />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/articleDetails/:id"
                element={
                  <ProtectedRoute>
                    <ArticleDetails getArticle={getArticle} getUser={getUser} />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/rocketform"
                entered={anim.entered}
                element={
                  <ProtectedRoute>
                    <RocketForm />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path="/users/auth/login"
                entered={anim.entered}
                element={<SignIn />}
              />
              <Route
                exact
                path="/users/auth/register"
                entered={anim.entered}
                element={<Signup />}
              />
              <Route
                exact
                path="/admin/addArticle"
                entered={anim.entered}
                element={
                  <ProtectedRoute>
                    <AddArticle />
                  </ProtectedRoute>
                }
                submitArticle={submitArticle}
              />
              <Route
                exact
                path="/planets/view/:id"
                entered={anim.entered}
                element={
                  <ProtectedRoute>
                    <PlanetView />
                  </ProtectedRoute>
                }
                submitArticle={submitArticle}
              />
            </Routes>
          </div>
        )}
      </Frame>
      <Footer />
    </div>
  );
};

export default withSounds()(withStyles(styles)(AppLayout));
