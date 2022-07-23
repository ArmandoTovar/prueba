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
import globalStyles  from '../hooks/global.js';
import {useTheme} from '../hooks/theme';

import * as themes from '../pages/api/varTheme.json';
import { setToLS } from '../utils/storage';
import { FaDharmachakra } from "react-icons/fa";

export default function Home(props) {
  setToLS('all-themes', themes.default);
  const {theme, themeLoaded,setMode} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
   
   }, [theme]);


  return (
    <>
      <Head>
        <title>At design</title>
      </Head>
      <button onClick={()=>{ 
        

        
        selectedTheme.id== 'T_002' ?setMode('dark') : setMode('light')}}>adsasda</button>

      <Navbar thema={ theme } />
      <main className={HomeStyle.main} >
      
     
      <Inf/>
      

      <About/>

      <Worked></Worked>
      
   <style jsx global>
      {`
  body {
    background:${theme != undefined ? theme.backgroundColor.primary:'white'};
    font-family:${theme != undefined ? theme.font :'Arial'};
  }
`}
      </style> 
      {/* <Built/>
      <Proyects/> */}

      <Worked/>
      <Built/>
      <Proyects/>

        </main>
       
    </>
  );
}
