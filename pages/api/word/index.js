import { connectToDatabase } from "../../../database/connectToDatabase"

export default async function handler(req, res) {

    const method = req.method
    switch (method){
        case "GET": {
            let db = await connectToDatabase();
            let result = await db.collection("word").find().toArray()
            return res.status(200).json(result)
        }
        default: {
            return res.status(404).json("err")
        }
    }
}