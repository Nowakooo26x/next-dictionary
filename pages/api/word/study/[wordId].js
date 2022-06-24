import dayjs from 'dayjs';

import { connectToDatabase } from "../../../../database/connectToDatabase";

export default async function handler(req, res) {
  const method = req.method;

  switch (method) {
    case "POST": {
      try {
        let db = await connectToDatabase();
        let myQuery, myResult;

        myQuery = { id: { $eq: Number(req.query.wordId) } };
        myResult = await db.collection("word").findOne(myQuery);
        let word = await myResult._id;

        db.collection("study").insertOne({
          _id_word: word,
          interval: 0,
          repetition: 0,
          efactor: 2.5,
          dueDate: dayjs(Date.now()).toISOString(),
        });
        return res.status(200).json({ message: "Item has been removed." });
      } catch (err) {
        console.log(err);
      }
    }
    default: {
      return res.status(404).json("err");
    }
  }
}
