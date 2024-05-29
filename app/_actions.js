"use server";

import dbConnection from "@/app/lib/db";

export const submitSurvey = async (prevState, formData) => {
  const formDataObj = Object.fromEntries(formData.entries());
  const {
    email,
    onlineBooking,
    stretchClasses,
    workplaceMassage,
    rateIncrease,
    comments,
    haircut,
  } = formDataObj;

  let dbClient;
  try {
    dbClient = await dbConnection;
  } catch (err) {
    console.error("Failed to connect to the database", err);
    throw err; // or handle the error in another way
  }

  if (!dbClient) {
    throw new Error("Database client is undefined");
  }

  console.log(process.env.DB_NAME);
  const db = dbClient.db(process.env.DB_NAME);
  //check if the user has already replied to the survey
  const survey = await db.collection("surveys").findOne({ email });
  if (survey) {
    return { message: "You have already replied to the survey." };
  }

  //insert the survey response into the database
  await db.collection("surveys").insertOne({
    email,
    onlineBooking,
    stretchClasses,
    workplaceMassage,
    rateIncrease,
    comments,
    haircut,
  });
  return { message: "Thank you for completing the survey!" };
};
