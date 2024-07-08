import {
	Environment,
	OrbitControls,
	PresentationControls,
} from "@react-three/drei";
import Lighting from "./scene/Lighting";
import { useRef } from "react";
import { Crystallball } from "./scene/Crystalball";

export function Experience() {
	const controls = useRef();
	return (
		<>
			<Lighting />

			<Crystallball />

			<OrbitControls ref={controls} />
			<Environment files="/metro_noord_1k.hdr" blur={1} />
		</>
	);
}
