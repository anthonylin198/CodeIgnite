// todo: User login and get user by the JWT token
import dbConnect from "../../../dbutils/dbConnect";
import User from "../../../models/User";
// import bcrypt, jwt, etc...
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const auth = require("../../../middleware/auth");

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        // todo middleware
        const token = req.headers["x-auth-token"];
        // check if no token
        if (!token) {
          return res
            .status(401)
            .json({ msg: "No token, authorization denied" });
        }
        // Verify Token
        const decoded = jwt.verify(token, "secret");
        req.user = decoded.user;
        const user = await User.findById(req.user.id).select("-password"); // req.user is set in the auth.js middleware
        res.status(200).json(user);
      } catch (error) {
        res.status(400).json({ success: false, msg: "Token not valid" });
      }
      break;
    case "POST":
      const { email, password } = req.body; // destructuring out of the body
      try {
        // check if the user exists
        let user = await User.findOne(email);
        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid Credentials" }] });
        }
        // Match the email and the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid Credentials" }] });
        }

        // Return the jsonwebtoken
        const payload = {
          user: {
            id: user.id,
          },
        };
        jwt.sign(payload, "secret", { expiresIn: 360000 }, (err, token) => {
          if (err) throw err;
          res.json({ token });
        });
        break;
      } catch (err) {
        res.status(500).send("Server error");
      }
    // take in the email password, check if that exists. If it does, then return the Jwt token
    default:
      res.status(400).json({ success: false });
      break;
  }
};
