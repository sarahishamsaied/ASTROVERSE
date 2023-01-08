const { signup, signin } = require("./users.auth.controller");
const {
  getAllAdmins,
  assignRole,
  uploadProfilePicture,
  getUser,
  addNewAstronaut,
  registeredUsersPerMonth,
} = require("./users.controller");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/users");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
// function fileFilter(req, file, cb) {
//   if (req.file.mimetype.startsWith("image")) cb(null, true);
//   else cb(null, false);
// }
const upload = multer({ storage });
const usersRouter = require("express").Router();
usersRouter.route("/auth/signup").post(signup);
usersRouter.route("/auth/signin").post(signin);
usersRouter.route("/admins").get(getAllAdmins);
usersRouter.route("/assignRole").put(assignRole);
usersRouter.route("/getUser/:id").get(getUser);
usersRouter.route("/astronauts").post(addNewAstronaut);
usersRouter.route("/registeredUsers").get(registeredUsersPerMonth);
usersRouter
  .route("/uploadImage")
  .post(upload.single("image"), uploadProfilePicture);
module.exports = usersRouter;
