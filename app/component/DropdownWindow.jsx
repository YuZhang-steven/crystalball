import React from "react";
import OutputBox from "./OutputBox";
import { create } from "zustand";

const dropdownOpen = create((set) => ({
	isOpen: false,
	setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default function DropdownWindow() {
	const { setIsOpen } = dropdownOpen();
	const { isOpen } = dropdownOpen();

	return (
		<div className="flex-col justify-center">
			{isOpen && <OutputBox toggle={setIsOpen} />}
			<div className="flex justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6 "
					onClick={setIsOpen}>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</div>
		</div>
	);
}
