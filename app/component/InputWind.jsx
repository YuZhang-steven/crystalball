import React from "react";
import { create } from "zustand";

export const Inputpopup = create((set) => ({
	inputShow: false,

	openInput: () => set({ inputShow: true }),
	closeInput: () => set({ inputShow: false }),
}));

export default function InputWind() {
	const { openInput, closeInput } = Inputpopup();
	return (
		<div className="fixed inset-0 m-auto z-10  bg-red-300  w-80 h-80">
			<div className="flex flex-row min-h-fit justify-end bg-green-200 pr-2">
				<button onClick={closeInput}>X</button>
			</div>
			InputWind
		</div>
	);
}
