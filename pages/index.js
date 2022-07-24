import Head from "next/head";
import Navbar from "../components/navbar";
import Inf from "../components/inf";
import Carousel from "../components/carousel";
import About from "../components/about";
import Worked from "../components/worked";
import HomeStyle from "../styles/Home.module.css";
import Built from "../components/built";
import Proyects from "../components/proyects";

import React, { useState, useEffect } from 'react';
import globalStyles from '../hooks/global.js';
import { useTheme } from '../hooks/theme';

import * as themes from '../pages/api/varTheme.json';
import { setToLS } from '../utils/storage';
import { FaDharmachakra } from "react-icons/fa";

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
      <button onClick={() => {



        selectedTheme.id == 'T_002' ? setMode('dark') : setMode('light')
      }}>Theme</button>

      <Navbar thema={theme} />
      <main className={HomeStyle.main} >


        <Inf  thema={theme}/>


        <About thema={theme} />

        <Worked thema={theme}/>

        <style jsx global>
          {`
  body {
    background:${theme != undefined ? theme.backgroundColor.primary : 'white'};
    font-family:${theme != undefined ? theme.font : 'Arial'};
  }
  button{
    background-color: rgba(0,0,0,0);
    border-color:${theme != undefined ? theme.textColor.primary : 'white'};
    color: ${theme != undefined ? theme.textColor.primary : 'white'};
  
  }
  button:hover{
    color: ${theme != undefined ? theme.backgroundColor.hover : '#0f5e4b'};
    border-color:${theme != undefined ? theme.backgroundColor.hover : '#0f5e4b'};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme != undefined ? theme.textColor.primary : 'white'}; 
  
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme != undefined ? theme.textColor.primary : 'white'}; 
  }

`}
        </style>

        <Built thema={theme} />
        <Proyects thema={theme} />

      </main>

    </>
  );
}
