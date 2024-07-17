import React, { useState, useEffect } from "react";
import { dropdownOpen } from "./DropdownWindow";

export default function OutputBox(props) {
	const { openDropdown } = dropdownOpen();
	const [text, setText] = useState("Hello");

	useEffect(() => {
		openDropdown();
	}, [text]);

	return (
		<div className="min-h-20 flex justify-center">
			<p>text</p>
		</div>
	);
}
