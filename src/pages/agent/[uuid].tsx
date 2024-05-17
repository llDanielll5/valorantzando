import React, { useCallback, useEffect, useState } from "react";
import { COLORS } from "@/styles/colors";
import { useRouter } from "next/router";
import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { getSingleAgentRequest } from "@/globals/requests/agents";
import { AllAgentsDataInterface } from "@/types/agents";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SingleAgent = () => {
  const { query, back } = useRouter();
  const uuid = query?.uuid;
  const [agent, setAgent] = useState<AllAgentsDataInterface | null>(null);
  const [selectedAbility, setSelectedAbility] = useState(0);

  const getSingleAgentAxiosRequest = useCallback(async () => {
    if (!uuid) return;
    return await getSingleAgentRequest(uuid as string).then(
      (res) => setAgent(res.data.data),
      (err) => console.log(err)
    );
  }, [uuid]);

  useEffect(() => {
    getSingleAgentAxiosRequest();
  }, [getSingleAgentAxiosRequest]);

  if (agent === null) return null;

  return (
    <>
      <Box
        bgcolor={COLORS.darkBlue}
        p={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          sx={{ borderRadius: "2px" }}
          onClick={() => back()}
        >
          Voltar
        </Button>

        <Typography variant="h5">ValorantZando</Typography>

        <Box />
      </Box>
      <Container>
        <Typography variant="h1" textAlign="center">
          {agent.displayName}
        </Typography>

        <Stack display="flex" alignItems="center" justifyContent="center">
          <AgentImage src={agent.fullPortraitV2} />
        </Stack>

        <Typography variant="h6" textAlign="center">
          {agent.description}
        </Typography>

        <Abilities>
          {agent.abilities.map((v, i) => (
            <AbilitySingle
              isSelected={i === selectedAbility}
              onClick={() => setSelectedAbility(i)}
            >
              <img src={v.displayIcon} alt={v.slot} width={100} height={100} />
            </AbilitySingle>
          ))}
        </Abilities>

        <Typography variant="h4" textAlign="center" my={2}>
          Descrição da Abilidade
        </Typography>
        <Typography variant="h4" fontWeight="normal">
          {selectedAbility == 0
            ? "Q"
            : selectedAbility == 1
            ? "E"
            : selectedAbility == 2
            ? "C"
            : "X"}{" "}
          - {agent.abilities[selectedAbility].displayName}
        </Typography>
        <Typography variant="h5" fontWeight="normal" mt={2}>
          {agent.abilities[selectedAbility].description}
        </Typography>
      </Container>
    </>
  );
};

const Container = styled(Box)`
  background-color: ${COLORS.primary};
  padding: 5rem;
`;

const AgentImage = styled("img")`
  min-width: 350px;
  max-width: 70vw;
  /* width: 100%; */
`;

const Abilities = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  margin: 0 auto;
`;

const AbilitySingle = styled(Box)<{ isSelected: boolean }>`
  border: 1px solid black;
  padding: 8px;
  background-color: ${({ isSelected }) =>
    isSelected ? "black" : "rgba(0, 0, 0, 0.5)"};
  border-radius: 1rem;
  margin-top: 1rem;
  position: relative;
  transition: 0.2s ease;
  cursor: pointer;
  :hover {
    background-color: ${COLORS.primary};
  }
`;

const KeyCode = styled(Typography)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export default SingleAgent;
