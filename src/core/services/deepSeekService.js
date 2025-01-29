const axios = require('axios');

const DEEPSEEK_API_URL = process.env.DEEPSEEK_API_URL || 'https://api.deepseek.com/v1';
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

const getDeepSeekResponse = async (prompt) => {
  try {
    const response = await axios.post(
      `${DEEPSEEK_API_URL}/chat`,
      { prompt },
      {
        headers: {
          'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error calling DeepSeek API:', error.response ? error.response.data : error.message);
    throw new Error('Failed to fetch response from DeepSeek');
  }
};

module.exports = { getDeepSeekResponse };
