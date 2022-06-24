import { connectToDatabase } from "../../../../database/connectToDatabase"
import getRandomInt from '../../../../utils/getRandomInt'

export default async function handler(req, res) {
    try {
        const db = await connectToDatabase();
        let arrayWordsRandom = []
        for(let i=0; i < 15; i++) {
            let randomNumber = getRandomInt(0, 5946)
            let result = await db.collection("word").findOne({ "id": randomNumber })
            arrayWordsRandom.push(result)
        }
        return res.status(200).json(arrayWordsRandom)
    }
    catch (err){
        console.log(err)
    }
};
