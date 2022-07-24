import Head from 'next/head'
import Navbar from '../components/navbar'
import Inf from '../components/inf'
import About from '../components/about'
import Worked from '../components/worked'
import Built from '../components/built'
import Proyects from '../components/proyects'
import Footer from '../components/footer'

import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/theme';
import * as themes from '../pages/api/varTheme.json';
import { setToLS } from '../utils/storage';
import Contact from '../components/contact'

export default function Home(props) {
  setToLS('all-themes', themes.default);
  const { theme, themeLoaded, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);

  }, [theme]);

  return (
    <>
      <Head>
        <title>At design</title>
      </Head>
      <button type='checkbox' onChange={() => {
        selectedTheme.id == 'T_002' ? setMode('dark') : setMode('light')
      }}>Theme</button>
      <Navbar />
      <main  >
        <Inf />
        <About />
        <Worked />
        <Built />
        <Proyects />
        <Contact/>
        <Footer/>

      </main>
      <style jsx global>
          {`
:root{
  --background:${theme != undefined ? theme.backgroundColor.primary : 'white'};
  --primary_text:${theme != undefined ? theme.textColor.primary : 'white'};
  --secondary_text:${theme != undefined ? theme.textColor.secundary : 'white'};
  --other_text:${theme != undefined ? theme.textColor.other : 'white'};
  --backgroun-card:${theme != undefined ? theme.backgroundColor.secundary : 'white'};
  --font:${theme != undefined ? theme.font : 'Arial'};
  --secondary_font:${theme != undefined ? theme.font : 'Inter'};
  --bacground-card-secondary:${theme != undefined ? theme.backgroundColor.hover : 'white'};
  }
`}
        </style>
    </>
  )
}
