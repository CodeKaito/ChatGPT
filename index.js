import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-48Z5lXhi5J9bSUphxwolUJQL",
    apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion ({
    model: "text-davinci-003",
    messages: [
        {role: "user", content: "Hello World"},
    ]
})

console.log(completion.data.choices[0].message);