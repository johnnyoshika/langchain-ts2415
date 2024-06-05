# LangChain TS2415 Bug Report

Issue: [5675](https://github.com/langchain-ai/langchainjs/issues/5675)

## Steps to Reproduce

1. Clone the repository
2. Run `npm ci`
3. Run `npm run build`
4. Observe the following error:

```
error TS2415: Class 'ChatOpenAI<CallOptions>' incorrectly extends base class 'BaseChatModel<CallOptions, AIMessageChunk>'.
  Property 'getLsParams' is protected in type 'ChatOpenAI<CallOptions>' but public in type 'BaseChatModel<CallOptions, AIMessageChunk>'.

68 export declare class ChatOpenAI<CallOptions extends ChatOpenAICallOptions = ChatOpenAICallOptions> extends BaseChatModel<CallOptions, AIMessageChunk> implements OpenAIChatInput, AzureOpenAIInput {
                        ~~~~~~~~~~
Found 1 error in node_modules/@langchain/openai/dist/chat_models.d.ts:68
```
