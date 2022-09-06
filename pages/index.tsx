
import React from "react";
import Head from 'next/head'

import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'


import { GetStaticProps } from 'next'
import Layout, { siteTitle } from '../components/layout'

// import {Link as Link2} from '@mui/material/Link';

import {Grid, Box, Slide, Grow, Typography, Button, IconButton} from '@mui/material';
import { styled, alpha, ThemeProvider, createTheme, useTheme,responsiveFontSizes, } from '@mui/material/styles';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import DownloadIcon from '@mui/icons-material/Download';


import HomeSectionFirst from './posts/HomeSectionFirst';
import HomeSectionSecond from './posts/HomeSectionSecond';
import HomeSectionThird from './posts/HomeSectionThird';
import HomeSectionFourth from './posts/HomeSectionFourth';
import HomeSectionFifth from './posts/HomeSectionFifth'; 



//  const containerRef = React.useRef(null);

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {

  const theme = useTheme();


  
  return (
   
    <ThemeProvider theme={theme} home>
    
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      {/* <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
       <Box className='ContainerWrapper' sx={{marginX:{ xs: '0.1rem', md:'1rem' },}}>{'<html>'}</Box>
       
        <HomeSectionFirst/>
        <HomeSectionSecond/>
        <HomeSectionThird/>
        <HomeSectionFourth/>
        <HomeSectionFifth/>

        <Box className='ContainerWrapper-base' sx={{marginX:{ xs: '0.1rem', md:'1rem' },}}>{'</html>'}</Box>
      
    
    </ThemeProvider>
    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}