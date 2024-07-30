"use client";
import React from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { dropdownText } from "../OutputBox";
import axios from "axios";
import toast from "react-hot-toast";

export function Crystallball(props) {
	const { nodes, materials } = useGLTF("/crystallball.glb");
	const { setText } = dropdownText();

	async function handleClick() {
		event.preventDefault();

		console.log("click");
		const date = Date.now();
		console.log(date);
		axios
			.post("/api/openAi", { text: date })
			.then((res) => setText(res))
			.catch(() => toast.error("An error occurred"));
	}

	return (
		<group {...props} dispose={null}>
			<mesh
				name="stall"
				castShadow
				receiveShadow
				geometry={nodes.stall.geometry}
				material={materials["Material.001"]}
				position={[0, -1.64, 0]}
			/>
			<mesh
				name="ball"
				castShadow
				receiveShadow
				geometry={nodes.ball.geometry}
				onClick={handleClick}
				// material={nodes.ball.material}
			>
				<MeshTransmissionMaterial
					thickness={0.2}
					backsideThickness={0.2}
					color={"#009ACE"}
					// background={"#839681"}
				/>
			</mesh>
		</group>
	);
}

// useGLTF.preload("/crystallball.glb");
