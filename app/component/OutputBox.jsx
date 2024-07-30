import React, { useState, useEffect } from "react";
import { dropdownOpen } from "./DropdownWindow";
import { create } from "zustand";

export const dropdownText = create((set) => ({
	text: "",
	setText: (newText) => set(() => ({ text: newText })),
}));

export default function OutputBox(props) {
	const { openDropdown } = dropdownOpen();
	const { text } = dropdownText();

	return (
		<div className="min-h-20 flex justify-center">
			<p>{text}</p>
		</div>
	);
}
