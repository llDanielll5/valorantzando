export const CONSTANTS = {
  API: "https://valorant-api.com",
  GET_AGENTS: "https://valorant-api.com/v1/agents",
  GET_SINGLE_AGENT: (uuid: string) =>
    `https://valorant-api.com/v1/agents/${uuid}`,
  BASE_QUERY: "?language=pt-BR&isPlayableCharacter=true",
};
