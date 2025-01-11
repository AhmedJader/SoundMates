const { CohereClientV2 } = require('cohere-ai');
require('dotenv').config();

const cohere = new CohereClientV2({
  token: process.env.COHERE_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const response = await cohere.chat({
        model: 'command-light',
        messages: [
          {
            role: 'user',
            content: message,
          },
        ],
      });
      
      console.log('Cohere API response:',response.message.content[0]?.text);

      res.status(200).json({ content: response.message.content[0]?.text || 'No response from Cohere API' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error processing request' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}