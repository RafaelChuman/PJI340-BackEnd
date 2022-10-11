import { AppError } from "@errors/AppError";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { app } from ".";

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {

    // response.setHeader("Access-Control-Allow-Origin", "*");
    // response.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");


    // response.header("Access-Control-Allow-Origin", "*");
    // response.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    // response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }




    return response.status(500).json({
      status: "Error",
      message: `Internal Server Errorr - ${err.message}`,
    });
  }
);

const PORT = process.env.PORT || 3333;
app.listen(
  PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
  }
);
