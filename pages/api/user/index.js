import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/User";
// import bcrypt, jwt, etc...
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      console.log(req.body);
      const { name, email, password } = req.body;
      try {
        // check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
          res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }
        // todo: Create a progress object, will start as empty for new users
        user = new User({
          name,
          email,
          password,
          isAuthenticated: true,
          progress: { test: 1 },
        });
        // Encrypt password with Bcrypt and save to database
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        const userData = await User.create(user);
        // Return the jsonwebtoken
        const payload = {
          user: {
            id: user.id,
          },
        };
        jwt.sign(payload, "secret", { expiresIn: 360000 }, (err, token) => {
          if (err) throw err;
          res.status(201).json({ success: true, token });
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
