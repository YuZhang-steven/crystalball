"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
// import "@/public/crystallball.glb";

export function Crystallball(props) {
	// const path = `@/public/crystallball.glb`;
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
				material={nodes.ball.material}
			/>
		</group>
	);
}

// useGLTF.preload("/crystallball.glb");
