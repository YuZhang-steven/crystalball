"use client";

import DropdownWindow from "@/app/component/DropdownWindow";
import { Experience } from "@/app/component/Experience";
import InputWind from "@/app/component/InputWind";
import { Canvas } from "@react-three/fiber";
import { useSession, signOut } from "next-auth/react";

const dashboard = () => {
	const { data: session } = useSession();
	return (
		<div className=" fixed w-full h-full overflow-hidden ">
			<div className=" relative flex flex-row justify-between">
				<h1>Dashboard</h1>
				<p>Welcome {session?.user?.email}</p>
				<button onClick={() => signOut()}>Sign Out</button>
			</div>
			<DropdownWindow />
			<InputWind />

			<Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
				<color attach="background" args={["#110e0d"]}></color>
				<Experience />
			</Canvas>
		</div>
	);
};
export default dashboard;
