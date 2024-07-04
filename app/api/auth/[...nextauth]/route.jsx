/**
 * main entry point for the auth app
 */

import NextAuth from "next-auth/next";
//with "export default" we can import the function with any name we want`
import prisma from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcrypt";

//basic auth api object, confiure
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    /** to use those providers, we need have an account first */
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    //the defual login provider
    CredentialsProvider({
      //the name of the provider
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "xx@gmail.com" },
        password: { label: "Password", type: "password" },
        username: { label: "Username", type: "text", placeholder: "username" },
      },
      /**
       * the auhtorization logic of the dafault provider, provide the credentials object and return the user object
       */
      async authorize(credentials) {
        //check if email and password not empty

        if (!credentials.email || !credentials.password) {
          throw new Error("Please fill all fields");
        }

        //check if teh user exist in the database
        //if no user found or user doesn't have password(they register though google or github), throw an error
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("No user found");
        }

        //check if the password is correct
        //if not, throw an error
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!passwordMatch) {
          throw new Error("Password is incorrect");
        }

        //if all the check pass, return the user
        return user;
      },
    }),
  ],
  //help to encrypt the JWT token
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
};

/** export the auth configure
 * in a next route file, it has to be export by a htrtp request(post request/get request)
 */
const handler = NextAuth(authOptions);
//we only use get and post in this route
export { handler as GET, handler as POST };
