import OpenAI from "openai";

export default async function getOpenAI() {
	const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY,
	});

	const response = await openai.chat.completions.create({
		messages: [
			{
				role: "system",
				content: `You are a astrologist. You will give 3-4 sentences to predict the future. 
          Then, generate a color index from the setences.`,
			},
			{
				role: "user",
				content: `birthdays:1993/05/28
         gender:male
         question:What is my future?
        `,
			},
		],
		model: "gpt-4o",
	});
	// const result = response.data.choices[0].text;
	const result = response.choices[0];
	console.log(result);
	return result.message.content;
}
