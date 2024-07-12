"use client";
import React, { useRef } from "react";
import {
	MeshRefractionMaterial,
	MeshTransmissionMaterial,
	useGLTF,
} from "@react-three/drei";

export function Crystallball(props) {
	const { nodes, materials } = useGLTF("/crystallball.glb");
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
