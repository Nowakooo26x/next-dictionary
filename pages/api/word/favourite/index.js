import { connectToDatabase } from "../../../../database/connectToDatabase"

export default async function handler(req, res) {

    const method = req.method
    switch (method){
        case "GET": {
            let db = await connectToDatabase();
            let favourite_word = await db.collection("favourite").aggregate([{
                $lookup:
                    {
                        from: "word",
                        localField: "_id_word",
                        foreignField : "_id",
                        as: "favourite_word"
                    }},{
                $project: 
                    { 
                        "_id": 0,
                        "favourite_word": 1,
                    }
            }]).toArray()

            let newArray = []
            
            favourite_word.forEach(item => {
                newArray.push(...item.favourite_word)
            })

            return res.status(200).json(newArray)
        }
        default: {
            return res.status(404).json("err")
        }
    }
}