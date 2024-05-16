import React from "react";
import { Box, Button, Card, Typography, styled } from "@mui/material";
import { COLORS } from "@/styles/colors";

const CallSection = () => {
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
            src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2020/12/Phase-Art.jpg"
            alt=""
          />
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
  min-width: 280px;
  min-height: 370px;
  max-width: 280px;
  max-height: 370px;
  position: relative;
  z-index: 20;
`;

const ImageAgent = styled("img")`
  min-width: 280px;
  min-height: 370px;
  max-width: 280px;
  max-height: 370px;
`;

const CardOutline = styled(Box)<{ topValue: string; leftValue: string }>`
  border: 1px solid ${COLORS.primary};
  position: absolute;
  opacity: 0.5;
  min-width: 280px;
  min-height: 370px;
  max-width: 280px;
  max-height: 370px;
  top: ${({ topValue }) => topValue};
  left: ${({ leftValue }) => leftValue};
  z-index: 10;
  border-radius: 0;
`;

export default CallSection;
