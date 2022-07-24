import Link from "next/link";
import Image from "next/image";
import Style from "./navbar.module.css";
import { useState } from "react";

export default function Navbar({ thema }) {

  return (
    <>
      <div className={Style.nav} id="nav">
        <nav className={Style.nav_container}>

          <div className={Style.svgpadre}>
          <svg className={Style.svg} width="100" height="78" viewBox="0 0 1000 780" xmlns="http://www.w3.org/2000/svg">

          <g>
          <title>Layer 1</title>
          <path id="svg_497" fill="#64FFDA"/>
          <g stroke="null" id="svg_549">
            <path stroke="null" id="svg_7" fill="#64FFDA" d="m816.95143,52.62702c-0.97229,1.05014 1.33499,0.91799 1.45516,0.7882c0.97229,-1.05014 -1.33499,-0.91799 -1.45516,-0.7882m-154.31688,166.76473c-26.91828,30.40689 -56.37762,58.69462 -82.71033,89.58292c-24.41435,28.64171 -49.51477,62.56952 -79.05932,85.04725c-8.24372,-31.14317 -26.43759,-58.56718 -39.74597,-87.31509c-24.90596,-53.79789 -50.12655,-107.41171 -76.41338,-160.47097c-9.24005,-18.65475 -17.17788,-37.93487 -26.33927,-56.63681c-2.96494,-6.05306 -6.60503,-18.82466 -14.81816,-17.77924c-6.03258,0.76932 -9.44543,8.06367 -12.17222,13.0713c-7.07697,12.99343 -12.95442,26.83641 -19.59441,40.10594c-20.50552,40.97437 -39.22596,83.35523 -58.40086,125.07296c-8.35952,18.18278 -18.40144,35.52072 -25.63135,54.27695l107.06132,0l10.92462,2.35987c5.48635,20.57804 15.95869,39.64577 24.28326,58.99668c19.34314,44.96255 39.01402,89.71743 58.74389,134.51243l-170.42415,0c18.2769,-41.50534 38.29299,-82.65435 54.62312,-125.07296l-120.17087,0c-11.41405,33.87825 -30.755,67.1689 -46.36192,99.11442c-25.17034,51.51826 -49.08871,103.78932 -73.49869,155.75123c-11.64783,24.79512 -26.83306,49.22683 -35.26906,75.51575l87.397,0c8.83147,0 25.98531,3.53036 33.43154,-2.42594c5.42954,-4.34216 7.8985,-14.84356 10.80882,-21.17273c8.28742,-18.02939 15.29447,-36.70065 24.41872,-54.27695c3.74496,-7.21647 7.09664,-18.73027 14.65866,-22.17567c10.61,-4.83301 27.6677,-1.423 39.03805,-1.423l91.76685,0c11.54733,0 29.87229,3.73331 40.39052,-2.02477c10.47672,-5.73448 18.90397,-21.35208 26.41574,-30.83638c18.6243,-23.51372 37.53483,-46.77021 56.13728,-70.30752c63.02635,-79.75879 127.05339,-158.58543 190.08629,-238.34659c40.02564,-50.64983 80.75483,-100.64362 120.73458,-151.3312c9.87368,-12.51674 19.74517,-25.04291 29.72372,-37.45817l-140.03403,145.64628z"/>
            <path stroke="null" id="svg_155" fill="#64FFDA" d="m367.36733,727.45968c20.32636,-15.46657 50.62067,-56.05135 64.23175,-75.69725c28.12872,-32.56145 57.11394,-64.23087 85.38468,-96.66252c53.78411,-61.69637 113.03491,-119.17565 163.50012,-184.16168c3.85169,36.49933 2.18492,78.90924 2.18492,115.63349l0,226.54725l54.62312,0l0,-299.70313l30.58895,0l0,299.70313l24.63006,0.6436c-5.72887,-47.11475 -0.59589,-94.75038 -0.59589,-142.23563l0,-252.50579l170.42415,0c-2.17837,-34.56261 -5.89711,-71.88627 0,-106.19402l-137.65027,0l-39.32865,0c-5.96266,0 -13.38267,-1.16105 -19.00885,1.423c-12.9719,5.9563 -25.12882,28.88477 -34.06298,40.41509c-24.57385,31.71897 -49.00568,63.64326 -73.94442,95.02713c-54.53573,68.62494 -107.31696,138.92066 -162.13236,207.27421c-21.07797,26.2842 -41.31038,53.34952 -62.37087,79.64316l-66.47348,90.84995z"/>
          </g>
          </g>
          </svg>
          </div>
          <label htmlFor="menu" className={Style.nav_label}>
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          </label>
          <input type="checkbox" id="menu" className={Style.nav_input}></input>
          <ul className={Style.nav_menu}>
            <li>
              <Link href="#clinicas">
                <a className={Style.nav__item}>About</a>
              </Link>
            </li>
            <li>
              <Link href="#servicios">
                <a className={Style.nav__item}>Experience</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="#informacion">
                <a className={Style.nav__item}>Work</a>
              </Link>
            </li>
            <li>
              <Link href="#contactos">
                <a className={Style.nav__item}>Contact</a>
              </Link>
            </li>
            <li>
              {" "}
              <button className={Style.button}>Resume</button>
              
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
                  #nav{
                    color:${thema != undefined ? thema.textColor != undefined ? thema.textColor.other : "#fff" : "#fff"};  
                  }
                  a{
                    color:${thema != undefined ? thema.textColor != undefined ? thema.textColor.other : "#fff" : "#fff"};
                  }
                  a::after{
                    background:${thema != undefined ? thema.textColor != undefined ? thema.textColor.other : "#fff" : "#fff"};
                  }

                  a:hover{
                      color: ${thema != undefined ? thema.textColor != undefined ? thema.textColor.primary : "#64FFDA" : "#64FFDA"};
                  }
                    label{
                      fill:${thema != undefined ? thema.textColor != undefined ? thema.textColor.primary : "#64FFDA" : "#64FFDA"};
                    }
                    ul{
                    background:${thema != undefined ? thema.textColor != undefined ? thema.backgroundColor.primary : "#020C1B" : "#020C1B"};
                    }
                    svg > g > g >path{
                  fill:${thema != undefined ? thema.textColor != undefined ? thema.textColor.primary : "#64FFDA" : "#64FFDA"};
                  
`}
              </style>
    </>
  );
}
