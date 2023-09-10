import mongoose from "mongoose";

export async function connect(): Promise<void> {
  let DB: string = "mongodb://localhost:27017";
  try {
    const connection: mongoose.Connection = (await mongoose.connect(DB!))
      .connection;

    connection.on("connected", () => {
      console.log("Succes DB");
    });

    connection.on("error", (err: any) => {
      console.log("Err DB" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Oops" + error);
  }
}
