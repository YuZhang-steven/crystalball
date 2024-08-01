import { NextResponse } from "next/server";
import getOpenAI from "./openAi";

export async function POST(request) {
	const response = await getOpenAI();

	// const testJson = { name: "test", age: 30, message: "New York" };

	return NextResponse.json(response);
}
