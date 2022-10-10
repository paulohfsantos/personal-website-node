import { Request, Response } from "express";

export class HelloController {
  hello (req: Request, res: Response) {
    try {
      return res.status(200).json({ message: "hello there!" })
    } catch (error) {
      return res.status(500).json({ message: "erro", error })
    }
  }
  ping (req: Request, res: Response) {
    try {
      return res.status(200).json({ message: "pong" })
    } catch (error) {
      return res.status(500).json({ message: "erro", error })
    }
  }
}
