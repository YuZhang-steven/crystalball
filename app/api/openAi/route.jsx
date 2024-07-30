import getOpenAI from "./openAi";

export async function POST(request) {
	const data = await request.json();

    const response = await getOpenAI()
    return response
}
