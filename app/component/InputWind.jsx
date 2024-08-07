import React from "react";
import { create } from "zustand";

export const Inputpopup = create((set) => ({
	inputShow: false,

	openInput: () => set({ inputShow: true }),
	closeInput: () => set({ inputShow: false }),
}));

export default function InputWind() {
	const { openInput, closeInput } = Inputpopup();
	function handleSubmit(formDate) {
		event.preventDefault();
		console.log("submit", formDate);
		closeInput();
	}

	return (
		<div className="fixed inset-0 m-auto z-10  bg-gray-50 shadow-sm  w-80 h-fit pb-10 rounded-md">
			<div className="flex flex-row min-h-fit rounded-t-md justify-end bg-gray-100 pr-2">
				<button onClick={closeInput}>X</button>
			</div>
			<form className="space-y-6 bg" onSubmit={handleSubmit}>
				<div className="mt-2 mx-2">
					<label
						htmlFor="birthday"
						className="block text-m font-medium leading-10 text-gray-900">
						Birthday
					</label>
					<input
						requuired
						id="birthday"
						name="birthday"
						type="date"
						autoComplete="bday"
						className="block w-full py-1.5 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300"
					/>
				</div>
				<div className="mx-2">
					<label
						htmlFor="birthday"
						className="block text-m font-medium leading-10 text-gray-900">
						What do you want to know?
					</label>
					<input
						requuired
						type="text"
						name="question"
						className="block w-full py-1.5 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300"
						placeholder="Enter your question here"
					/>
				</div>
				<button
					type="submit"
					className="flex w-fit justify-center mx-auto px-3 rounded-md bg-white font-semibold ">
					Submit
				</button>
			</form>
		</div>
	);
}
