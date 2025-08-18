import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  //generating the JWT token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.cookie("jwt", token, {
    //cause jwt token user lai as a cookie pathaunu xa
    httpOnly: true, //prevents XSS attacks
    secure: process.env.NODE_ENV !== "development", //only use secure cookies in production
    sameSite: "strict",
  });
  return token;
};
