import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });
    res.json({ message: "User registered", user });
  } catch (error) {
    res.status(400).json({ error: "Email already exists" });
  }
};
