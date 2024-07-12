import React, { useState } from "react";
import OutputBox from "./OutputBox";

export default function DropdownWindow() {
	const [isOpen, setIsOpen] = useState(false);

	function toggleDropdown() {
		setIsOpen((prevState) => !prevState);
	}

	return (
		<div className="flex-col justify-center">
			{isOpen && <OutputBox />}
			<div className="flex justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6 "
					onClick={toggleDropdown}>
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
