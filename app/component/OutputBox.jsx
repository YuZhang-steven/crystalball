import React, { useState, useEffect } from "react";

export default function OutputBox(props) {
	const [text, setText] = useState("Hello");

	useEffect(() => {}, [text]);

	return (
		<div className="min-h-20 flex justify-center">
			<p>text</p>
		</div>
	);
}
