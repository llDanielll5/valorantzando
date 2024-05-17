import axios from "axios";
import { CONSTANTS } from "../constants";

export const getAllAgentsRequest = async () => {
  return await axios.get(`${CONSTANTS.GET_AGENTS}${CONSTANTS.BASE_QUERY}`);
};

export const getSingleAgentRequest = async (uuid: string) => {
  return await axios.get(`${CONSTANTS.GET_SINGLE_AGENT(uuid)}?language=pt-BR`);
};
