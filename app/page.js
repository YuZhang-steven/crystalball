import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import User from "./component/user";

/** The function need to wait the login callback, so it ill be an async function */
export default async function Home() {
  /** get the session data to show */
  const session = await getServerSession(authOptions);

  return (
    <section>
      <h1>home</h1>
      <h1>Server side Rendered</h1>
      {/* show the callback session data */}
      <pre>{JSON.stringify(session)}</pre>
      <h1>Render in Client Side</h1>
      <User />
    </section>
  );
}
