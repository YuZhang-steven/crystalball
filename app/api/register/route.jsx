/**
 * Back-end Api handling. The fRont-end will make a request to this api to register a new user.
 */

import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

// The nextResponse will allow us to send a response to the front-end
import { NextResponse } from "next/server";

// In route, we just call the function the http request method we want to handle
export async function POST(request) {
  //change the body to json, we need to await the request
  const body = await request.json();
  //destructure the body into different part
  const { name, email, password } = body;

  //first to chack each field is not empty, if so, sent back a response
  if (!name || !email || !password) {
    return new NextResponse("Please fill all fields", { status: 400 });
  }

  /*
  no repeat email account
  check the database through prisma
  */
  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  //if the email exist, stop the process and send back a response
  if (exist) {
    throw new Error("Email already exist");
  }

  /**
   * after all those checking, hash the password
   */

  const hashedPassword = await bcrypt.hash(password, 10);

  /**
   * create a new user in the database
   * use prisma create method
   */

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  /** return the user */
  return NextResponse.json(user);
}
