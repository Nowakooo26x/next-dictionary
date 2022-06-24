import { connectToDatabase } from "../../../database/connectToDatabase"

export default async function handler(req, res) {

    const method = req.method
    switch (method){
        case "GET": {
          const db = await connectToDatabase();
          let result = await db.collection("word").findOne({ "id": Number(req.query.wordId) })
          return res.status(200).json(result)
        }
        default: {
            return res.status(404).json("err")
        }
    }
}
