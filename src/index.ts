import { ChatOpenAI } from '@langchain/openai';

const chatModel = new ChatOpenAI({
  apiKey: 'foobar',
  model: 'gpt-3.5-turbo',
});

async function main() {
  try {
    const res = await chatModel.invoke([['user', 'Hi there!']]);
    console.log(res.content);
  } catch (error) {
    console.error('error', error);
  }
}

main();
