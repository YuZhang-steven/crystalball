"use client";

import { Canvas } from "@react-three/fiber";
import { useSession, signOut } from "next-auth/react";

const dashboard = () => {
  const { data: session } = useSession();
  return (
    <div className="@apply fixed w-full h-full overflow-hidden left-0 top-0">
      <div className=" relative flex flex-row justify-between">
        <h1>Dashboard</h1>
        <p>Welcome {session?.user?.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>

      <Canvas>
        <color
          attach="background"
          args={["#73d9e1"]}></color>
      </Canvas>
    </div>
  );
};
export default dashboard;
