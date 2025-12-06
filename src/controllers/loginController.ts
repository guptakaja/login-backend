import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user: any = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Incorrect password" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    res.json({ message: "Login success", token });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
