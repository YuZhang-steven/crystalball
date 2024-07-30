import React, { useEffect } from "react";
import OutputBox, { dropdownText } from "./OutputBox";
import { create } from "zustand";

export const dropdownOpen = create((set) => ({
	dropdownShow: false,
	changeDropdown: () => set((state) => ({ dropdownShow: !state.dropdownShow })),
	openDropdown: () => set({ dropdownShow: true }),
}));

export default function DropdownWindow() {
	const { dropdownShow, changeDropdown, openDropdown } = dropdownOpen();
	const { text } = dropdownText();

	useEffect(() => {
		if (text) {
			openDropdown();
		}
	}, [text]);

	return (
		<div className="flex-col justify-center">
			{dropdownShow && <OutputBox toggle={changeDropdown} />}
			<div className="flex justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6 "
					onClick={changeDropdown}>
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
