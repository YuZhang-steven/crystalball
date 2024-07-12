import OpenAI from "openai";

const openai = new OpenAI();
async function getOpenAI() {
	const response = await openai.chat.completions.create({
		messages: [
			{
				role: "system",
				content: `You are a astrologist. You will give 3-4 sentences to predict the future. 
          Then, generate a color index from the setences within the tag<c><c/>.`,
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
	return response.data.choices[0].text;
}
