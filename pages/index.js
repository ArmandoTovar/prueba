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
import Style from '../components/style'
import PopUp from '../components/elements/popUp'
import DropdownLanguage from '../components/elements/dropdownLanguage'

export default function Home() {
  setToLS('all-themes', themes.default);
  const { theme, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme]);


  return (
    <>
      <Head>
        <title>At design</title>
      </Head>
  
      <DropdownLanguage/>
      
      <Navbar setMode={setMode}  selectedTheme={selectedTheme} />
      <main>
        <Inf />
        <About />
        <Worked />
        <Built />
   
        <Contact />

        <Footer />
        <PopUp />
      </main>
      <Style theme={theme} />
    </>
  )
}
