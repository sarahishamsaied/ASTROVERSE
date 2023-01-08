import axios from "axios";
async function httpGetPlanets() {
  const response = await axios.get("http://localhost:8282/api/planets");
  console.log(response.data);
  return response.data;
}
async function httpDeletePlanet(id) {
  const response = await axios.delete(
    "http://localhost:8282/api/planets/" + id
  );
  return response.data;
}
async function httpGetAllAnnouncements() {
  const response = await axios.get("http://localhost:8282/api/announcements");
  return response.data;
}
async function httpGetUserById(id) {
  const response = await axios.get(
    "http://localhost:8282/api/users/getUser/" + id
  );
  return response.data;
}
async function httpGetTasksPerMonth() {
  const response = await axios.get(
    "http://localhost:8282/api/tasks/tasksPerMonth"
  );
  return response.data;
}
async function httpAssignRole(data) {
  const response = await axios.put(
    "http://localhost:8282/api/users/assignRole",
    data
  );
  return response.data;
}
async function httpCompleteTask(id) {
  const response = await axios.post(
    "http://localhost:8282/api/tasks/completeTask/" + id
  );
  return response.data;
}
async function httpUnCompleteTask(id) {
  const response = await axios.post(
    "http://localhost:8282/api/tasks/unCompleteTask/" + id
  );
  return response.data;
}
async function httpAdminLogin(data) {
  const response = await axios.post(
    "http://localhost:8282/api/users/auth/signin",
    data,
    {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}

async function httpGetLaunches() {
  const response = await axios.get("http://localhost:8282/api/missions");
  return response.data;
}

async function httpSubmitLaunch(launch) {
  const response = await axios.post(
    "http://localhost:8282/api/missions",
    launch
  );
  return response;
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  const response = await fetch("http://localhost:8282/mission");
  return await response.json();
}
async function httpAddTask(task) {
  const response = await axios.post("http://localhost:8282/api/tasks", task);
  return response.data;
}
async function httpGetTasks() {
  const response = await axios.get("http://localhost:8282/api/tasks");
  console.log(response.data);
  return response.data;
}
async function httpSubmitRocket(rocket) {
  const response = await axios.post(
    "http://localhost:8282/api/rockets",
    rocket
  );
  return response.data;
}
async function httpGetRocket(id) {
  const response = await axios.get(`http://localhost:8282/api/rockets/${id}`);
  return response.data;
}
async function httpGetAllRockets() {
  const response = await axios.get("http://localhost:8282/api/rockets");
  return response.data;
}
async function httpDeleteRocket(id) {
  const response = await axios.delete(
    "http://localhost:8282/api/rockets/" + id
  );
  return response.data;
}
async function httpModifyRocket(newRocketData) {
  const response = await axios.put(
    "http://localhost:8282/api/rockets/" + newRocketData.id,
    newRocketData
  );
  return response.data;
}
async function httpGetAllAdmins() {
  const response = await axios.get("http://localhost:8282/api/users/admins");
  return response.data;
}
async function httpGetAllArticles() {
  const response = await axios.get("http://localhost:8282/api/articles");
  console.log(response.data);
  return response.data;
}
async function httpPostArticle(article) {
  console.log(article);
  const response = await axios.post(
    "http://localhost:8282/api/articles",
    article
  );
  return response.data;
}
async function httpGetArticleById(id) {
  const response = await axios.get("http://localhost:8282/api/articles/" + id);
  return response.data;
}
async function httpGetRegisteredUsersMonthly() {
  const response = await axios.get(
    "http://localhost:8282/api/users/registeredUsers"
  );
  return response.data;
}
async function httpAddNewAstronaut(astronaut) {
  const response = await axios.post(
    "http://localhost:8282/api/users/astronauts",
    astronaut
  );
  console.log(response.data);
  return response.data;
}
async function httpSignup(data) {
  const response = await axios.post(
    "http://localhost:8282/api/users/auth/signup",
    data
  );
  return response.data;
}
async function httpGetAllUsers() {
  const response = await axios.get("http://localhost:8282/api/users");
  return response.data;
}
async function httpAddPlanet(planet) {
  const response = await axios.post(
    "http://localhost:8282/api/planets",
    planet
  );
  return response.data;
}
export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
  httpSubmitRocket,
  httpGetAllRockets,
  httpGetRocket,
  httpGetAllAdmins,
  httpGetAllArticles,
  httpPostArticle,
  httpGetArticleById,
  httpGetUserById,
  httpDeleteRocket,
  httpModifyRocket,
  httpAdminLogin,
  httpAddTask,
  httpGetTasks,
  httpGetRegisteredUsersMonthly,
  httpGetTasksPerMonth,
  httpCompleteTask,
  httpUnCompleteTask,
  httpAssignRole,
  httpAddNewAstronaut,
  httpSignup,
  httpGetAllUsers,
  httpAddPlanet,
  httpDeletePlanet,
  httpGetAllAnnouncements,
};
