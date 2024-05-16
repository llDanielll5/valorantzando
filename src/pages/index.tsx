import Head from "next/head";
import { Box, Typography, styled } from "@mui/material";
import Header from "@/globals/components/landing-page/header";
import CallSection from "@/globals/components/landing-page/call-section";

export default function Home() {
  return (
    <>
      <Head>
        <title>Valorantzando - Front-End Live Application</title>
        <meta
          name="description"
          content="Simple Front-End Application created in Live"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container width="100%" height="100vh">
        <Header />

        <CallSection />
      </Container>
    </>
  );
}

const Container = styled(Box)`
  background: url("/images/valorantzando_bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
