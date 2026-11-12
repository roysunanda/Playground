import { OpenAI } from "openai";
import "dotenv/config";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// client.chat.completions
//   .create({
//     model: "gpt-6-luna",
//     messages: [
//       {
//         role: "user",
//         content: "Hello, how are you?",
//       },
//     ],
//   })
//   .then((response) => {
//     console.log(response.choices[0].message.content);
//   });

async function main() {
  const result = await client.chat.completions.create({
    model: "gpt-6-luna",
    messages: [
      {
        role: "user",
        content: "what is your name ?",
      },
    ],
  });
  console.log(result.choices[0].message.content);
}

main();
