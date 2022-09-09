import '../styles/globals.css'
import React, { useState, useEffect } from "react";
import { AppProps } from 'next/app'
import useMediaQuery from '@mui/material/useMediaQuery';
import Layout, { siteTitle } from '../components/layout'
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import GoTop from "../components/goTop";
import DancingLinesDark from '../components/dancing-lines-dark';
import DancingLinesLight from '../components/dancing-lines-light';
import useBreakpoint from 'use-breakpoint';
import Script from 'next/script'


const BREAKPOINTS = { mobile: 0, tablet: 900, desktop: 1280 }

export default function App({ Component, pageProps }: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );


theme = responsiveFontSizes(theme);

const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop');

const DancingLinesDisplay=()=>{
  if(breakpoint!=='mobile' && theme.palette.mode === 'dark' ){
    return(
      <DancingLinesDark></DancingLinesDark>
    )
  }
  else if(breakpoint!=='mobile' && theme.palette.mode === 'light'){
    return(
      <DancingLinesLight></DancingLinesLight>
    )
  }
  else return null;
}

  return (
    <>
     <Script
        id="gtag-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WGQ35MD');
          `,
        }}
      />
    <ThemeProvider theme={theme}>
      <GoTop />
      {DancingLinesDisplay()}
     
  <Layout ><Component {...pageProps} /></Layout>
  </ThemeProvider>
  </>
  )
}