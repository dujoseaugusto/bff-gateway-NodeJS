const express = require('express');
const dotenv = require('dotenv');
const deepSeekService = require('./core/services/deepSeekService');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Endpoint BFF
app.post('/bff/deepseek', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const response = await deepSeekService.getDeepSeekResponse(prompt);
    res.json({ response });
  } catch (error) {
    console.error('Error in BFF:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`BFF running on http://localhost:${port}`);
});