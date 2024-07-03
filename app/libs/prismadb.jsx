import { PrismaClient } from "@prisma/client";

/**
 * setup prisma client, so we can use it like a hook in different places
 * prisma client is a query builder, the wat to interact with the database
 *
 */

//glaoalThis means a global object in javascript. In node.js, this is not working.glaobalthis guranatees that the object is available in all environments
//find the prisma in the global env or create a new one
const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV === "production") {
  globalThis.prisma = client;
}

export default client;
