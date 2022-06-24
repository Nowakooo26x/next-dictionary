import dayjs from 'dayjs';

import { connectToDatabase } from "database/connectToDatabase";

export default async function handler(req, res) {
  const method = req.method;

  switch (method) {
    case "POST": {
      try {
        let db = await connectToDatabase();

        return res.status(200).json({ message: "msg..." });
      } catch (err) {
        console.log(err);
      }
    }
    default: {
      return res.status(404).json("err");
    }
  }
}
