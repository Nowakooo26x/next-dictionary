import { connectToDatabase } from "../../../../database/connectToDatabase";

export default async function handler(req, res) {
  const method = req.method;
  switch (method) {
    case "GET": {
      let db = await connectToDatabase();

      let study_word = await db
        .collection("study")
        .aggregate([
          {
            $lookup: {
              from: "word",
              localField: "_id_word",
              foreignField: "_id",
              as: "study_word",
            },
          },
          {
            $project: {
              _id: 0,
              _id_word: 0,
            },
          },
        ])
        .toArray();

      const newArray = [];

      study_word.map((value) => {
        
        let study = value.study_word[0]
        let localArray = {
            ...study,
            ...value
        };
        delete localArray._id
        delete localArray.study_word
        newArray.push(localArray);
      });

      return res.status(200).json(newArray);
    }
    default: {
      return res.status(404).json("err");
    }
  }
}
