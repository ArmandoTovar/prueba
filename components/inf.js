import Link from "next/link"
import Image from "next/image"
import Style from './inf.module.css'
import 'animate.css'
export default function Inf({ thema }){
    return (<>
    <div className={Style.inf}>
        <span className="animate__animated animate__bounceInLeft">Hi, my name is</span>
        <h3>Stephen Gachoka.</h3>
        <h4 className={Style.h4}>I create solutions from coding.</h4>
        <p className="animate__animated animate__fadeInTopRight">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences for both web and mobile platforms. Currently, I’m focused on building Continous Intergration Continuos Deployment(CICD) solutions for organizations.</p>
        <button className={Style.button}>Read my Book</button>
    </div>
    <style jsx>{`
                  h3{
                    color:${thema != undefined ? thema.textColor != undefined ? thema.textColor.other : "#fff" : "#fff"};  
                  }
                  h4{
                    color:${thema != undefined ? thema.textColor != undefined ? thema.textColor.secundary : "#A8B2D1" : "#A8B2D1"};
                  }

                  span{
                      color: ${thema != undefined ? thema.textColor != undefined ? thema.textColor.primary : "#64FFDA" : "#64FFDA"};
                  }
                 p{
                      color:${thema != undefined ? thema.textColor != undefined ? thema.textColor.parag : "#000" : "#000"};
                    }
                  `}
              </style>
    </>)
}