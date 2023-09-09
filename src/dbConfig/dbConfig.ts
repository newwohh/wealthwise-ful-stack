import mongoose from "mongoose";

export async function connect() {
  let DB: string = "mongodb://localhost:27017";
  try {
    const connection: mongoose.Connection = (await mongoose.connect(DB!))
      .connection;

    connection.on("connected", () => {
      console.log("Succes DB");
    });

    connection.on("error", (err) => {
      console.log("Err DB" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Oops" + error);
  }
}
