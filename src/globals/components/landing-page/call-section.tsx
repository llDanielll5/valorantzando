import React, { useEffect, useState } from "react";
import { Box, Button, Card, Typography, styled } from "@mui/material";
import { COLORS } from "@/styles/colors";
import { AllAgentsDataInterface, AllAgentsInterface } from "@/types/agents";
import { getAllAgentsRequest } from "@/globals/requests/agents";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";

const CallSection = () => {
  const [agents, setAgents] = useState<AllAgentsDataInterface[]>([]);
  const [currentAgent, setCurrentAgent] = useState(0);
  const { push } = useRouter();

  const getAgentsAxiosRequest = async () => {
    return await getAllAgentsRequest().then(
      (res) => setAgents(res.data.data),
      (err) => console.log(err)
    );
  };

  const backImage = () => {
    currentAgent == 0
      ? setCurrentAgent(agents.length - 1)
      : setCurrentAgent((prev) => prev - 1);
  };
  const nextImage = () => {
    currentAgent == agents.length - 1
      ? setCurrentAgent(0)
      : setCurrentAgent((prev) => prev + 1);
  };

  const getSingleAgent = (uuid: string) => {
    push(`/agent/${uuid}`);
  };

  useEffect(() => {
    getAgentsAxiosRequest();
  }, []);

  return (
    <Container>
      <LeftSide>
        <Typography variant="h2">
          Conheça mais sobre todos os agentes Valorant!
        </Typography>
        <Typography variant="body1" mt={4}>
          Clique no Agente para saber mais.
        </Typography>
        <Button variant="contained" sx={{ mt: 4, borderRadius: "2px" }}>
          Ver Todos
        </Button>
      </LeftSide>

      <RightSide>
        <CardOutline topValue="-7px" leftValue="7px" />
        <CardOutline topValue="-14px" leftValue="14px" />
        <CardOutline topValue="-21px" leftValue="21px" />
        <ImageCard>
          <ImageAgent
            src={agents?.[currentAgent]?.fullPortraitV2}
            alt=""
            onClick={() => getSingleAgent(agents?.[currentAgent]?.uuid)}
          />
          <NameContainer>
            <Typography variant="h4">
              {agents?.[currentAgent]?.displayName}
            </Typography>
          </NameContainer>
          <ArrowsContainer>
            <LeftArrow onClick={backImage} />
            <RightArrow onClick={nextImage} />
          </ArrowsContainer>
        </ImageCard>
      </RightSide>
    </Container>
  );
};

const Container = styled(Box)`
  padding: 5rem 5rem 0 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSide = styled(Box)`
  width: 40%;
`;
const RightSide = styled(Box)`
  width: 30%;
  position: relative;
`;

const ImageCard = styled(Card)`
  border-radius: 0;
  min-width: 330px;
  min-height: 370px;
  max-width: 330px;
  max-height: 370px;
  position: relative;
  z-index: 20;
  cursor: pointer;
  background: linear-gradient(
    to left,
    ${COLORS.primary},
    ${COLORS.primary},
    ${COLORS.secondary}
  );
  :hover {
    opacity: 0.8;
  }
`;

const ArrowsContainer = styled(Box)`
  position: absolute;
  z-index: 30;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
`;

const NameContainer = styled(Box)`
  position: absolute;
  z-index: 30;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%);
`;

const ImageAgent = styled("img")`
  min-width: 330px;
  min-height: 370px;
  max-width: 330px;
  max-height: 370px;
`;

const CardOutline = styled(Box)<{ topValue: string; leftValue: string }>`
  border: 1px solid ${COLORS.primary};
  position: absolute;
  opacity: 0.5;
  min-width: 330px;
  min-height: 370px;
  max-width: 330px;
  max-height: 370px;
  top: ${({ topValue }) => topValue};
  left: ${({ leftValue }) => leftValue};
  z-index: 10;
  border-radius: 0;
`;

const LeftArrow = styled(ArrowBackIosNewIcon)`
  cursor: pointer;
  padding: 2px;
  background-color: white;
  border-radius: 50%;
  color: black;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
    scale: 1.5;
  }
`;
const RightArrow = styled(ArrowForwardIosIcon)`
  cursor: pointer;
  padding: 2px;
  background-color: white;
  border-radius: 50%;
  color: black;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
    scale: 1.5;
  }
`;

export default CallSection;
