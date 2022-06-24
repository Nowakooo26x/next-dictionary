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

        db.collection("favourite").insertOne({ _id_word: word });
        return res.status(200).json({ message: "New item has been added." });
      } catch (err) {
        console.log(err);
        return res.status(404).json({ error: "error default" });
      }
    }
    case "DELETE": {
      try {
        let db = await connectToDatabase();
        let myQuery, myResult;

        myQuery = { id: { $eq: Number(req.query.wordId) } };
        myResult = await db.collection("word").findOne(myQuery);
        let word = await myResult._id;

        db.collection("favourite").deleteOne({ _id_word: word });
        return res.status(200).json({ message: "Item has been removed." });
      } catch (err) {
        console.log(err);
        return res.status(404).json({ error: "error default" });
      }
    }
    default: {
      return res.status(404).json({ error: "error default" });
    }
  }
}
