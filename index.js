const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Open AI Configuration
const configuration = new Configuration({
    organization: "org-BUAQVEf2IjhAcPumMTf3XQtx",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// Express Configuration
const app = express()
const port = 3080

app.use(bodyParser.json())
app.use(cors())
app.use(require('morgan')('dev'))


// Routing 

// Primary Open AI Route
app.post('/', async (req, res) => {
	const { message, currentModel, temperature } = req.body;
	const response = await openai.createCompletion({
		model: `${currentModel}`,// "text-davinci-003",
		prompt: `I want this to be a theripudical assitant that can help me calm down and deal with mental challenges. This is also a chatbot assistant.
		AI Therapist: Hello, how can I help you today?
		Human: Im feeling down can you help me get past something tha happened?
		AI Therapist: Of course, what happened?
		Human: ${message}`,
		max_tokens: 100, 
		temperature,

	  });
	res.json({
		message: response.data.choices[0].text,
	})
});

// Get Models Route
app.get('/models', async (req, res) => {
	const response = await openai.listEngines();
	res.json({
		models: response.data
	})
});

// Start the server
app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
});