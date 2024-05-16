import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme } from "@/services/theme";
import createEmotionCache from "@/utils/createEmotionCache";
import { useNProgress } from "@/globals/hooks/useNProgress";
import { CacheProvider } from "@emotion/react";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { CssBaseline, ThemeProvider } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

export default function App(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNProgress();

  const theme = createTheme();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </CacheProvider>
  );
}
