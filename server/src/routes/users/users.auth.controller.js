const { users, regular_users } = require("../../../models/index");
const jwt = require("jsonwebtoken");
const signup = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password, username, first_name, last_name } = req.body;
    const doesEmailExist = await checkEmailExists(email);
    console.log(doesEmailExist);
    if (doesEmailExist) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }
    const newUser = await users.create({
      email,
      password,
      first_name,
      last_name,
      age: 0,
      authority_level: "user",
      registered_at: new Date(),
    });
    const newRegularUser = await regular_users.create({
      email,
      username,
      uid: newUser.id,
    });
    const token = jwt.sign(
      { user: { ...newUser, ...newRegularUser } },
      process.env.TOKEN_SECRET
    );
    res.cookie(`token`, token, {
      maxAge: 5000,
      secure: true,
      httpOnly: true,
      sameSite: "lax",
    });
    res.status(200).json({ message: "User added successfully", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const checkEmailExists = async (email) => {
  const foundEmail = await regular_users.findOne({
    where: {
      email,
    },
  });
  console.log("founemailis", foundEmail);
  return foundEmail ? true : false;
};
const signin = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Credentials", true);

    const { email, password } = req.body;
    const user = await users.findOne({
      where: {
        email,
      },
    });
    if (user) {
      if (user.password === password) {
        const token = jwt.sign({ user }, process.env.TOKEN_SECRET);
        res.cookie(`token`, token, {
          maxAge: 1000 * 60 * 30,
          secure: true,
          sameSite: "lax",
        });
        res.status(200).json({ message: "User logged in successfully", token });
      } else {
        res.status(400).json({ message: "Incorrect password" });
      }
    } else {
      res.status(400).json({ message: "User does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { signup, signin };
