jwt = require("jsonwebtoken");
dotenv = require("dotenv");
dotenv.config();

module.exports.authMiddleware = async (req, res, next) => {
  try {

    const token = req.headers.authorization;

    if (!token) {
      console.log("token missing in bE", token);

      return res.status(200).json({ message: "token missing" });
    }

    console.log("token recived in bE", token);

    const decode = jwt.verify(token, process.env.SECTERT_KEY);

    console.log('decoded token', decode);

    req.user = decode;

    next();
  } catch (error) {
    console.log(error);

    return res.status(200).json({ message: "token invalid" });
  }
};
