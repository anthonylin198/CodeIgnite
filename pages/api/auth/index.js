// todo: User login and get user by the JWT token
import dbConnect from "../../../utils/dbConnect";
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
        console.log(decoded);
        req.user = decoded.user;
        console.log("heerree");
        const user = await User.findById(req.user.id).select("-password"); // req.user is set in the auth.js middleware
        res.json(user);
      } catch (error) {
        res.status(400).json({ success: false, msg: "Token not valid" });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
