import { createOpenRouter } from "@openrouter/ai-sdk-provider";

export function getAgentModel() {

    const provider = createOpenRouter({apiKey:process.env.OPENROUTER_API_KEY});

    const modelId = process.env.OPENROUTER_DEFAULT_MODEL ?? "openai/gpt-4o";

    return provider(modelId);
}
