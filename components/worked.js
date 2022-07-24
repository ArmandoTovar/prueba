import Link from "next/link";
import Image from "next/image";
import Style from "./worked.module.css";
import { useState } from "react";
import api from "../pages/api/api.json";

export default function Worked({ thema }) {
  const Prof = api.datos;
  const [work, setWork] = useState(0);

  return (
    <>
      <div className={Style.worked_container}>
        <div className={Style.title}>
          <h6 className={Style.section}>Where I have worked</h6>
          <div className={Style.separator} id="separator"></div>
        </div>

        <div className={Style.worked}>
          <div className={Style.bar}>
            {Prof.map((empresa, index) => {
              return (
                <>
                 <input
                   key={"input" + index}
                   id={"e" + index}
                   type="radio"
                   name="prof"
                   value={index}
                   checked={work == index}
                   onChange={() => setWork(index)}
                 />
                <label className={Style.business} key={"lab" + index} htmlFor={"e" + index}>
                {empresa.name}
                 
            
                  </label>
                  </>
                
              );
            })}
          </div>


          <div className={Style.employ}>
          <h6 className={Style.job}>{Prof[work].cargo}</h6>
            <span>{Prof[work].fecha}</span>
            {Prof[work].act.map((e, index) => {
              return <p key={"text" + index}>{e}</p>;
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
                  label ,h6{
                    color:${thema != undefined ? thema.textColor != undefined ? thema.textColor.other : "#fff" : "#fff"};  
                  }
                 span{
                      color: ${thema != undefined ? thema.textColor != undefined ? thema.textColor.primary : "#64FFDA" : "#64FFDA"};
                  }
                  p{
                      color:${thema != undefined ? thema.textColor != undefined ? thema.textColor.parag : "#000" : "#000"};
                    }
                #separator {
                      border-color: ${thema != undefined ? thema.textColor != undefined ? thema.textColor.primary : "#64FFDA" : "#64FFDA"};
                    }
                  div::before {
                      border-color:${thema != undefined ? thema.textColor != undefined ? thema.textColor.primary : "#64FFDA" : "#64FFDA"}; 
                    }
                    div >p::before {
                      border-color: transparent transparent transparent ${thema != undefined ? thema.textColor != undefined ? thema.textColor.primary : "#64FFDA" : "#64FFDA"};
                    } 
                    div >input[type="radio"]:checked+label {
                      background:${thema != undefined ? thema.backgroundColor != undefined ? thema.backgroundColor.hover : '#0f5e4b' : '#0f5e4b'}; 
                         }
                    
                    div > input[type="radio"]:checked+label::before {
                        border-left-color: ${thema != undefined ? thema.textColor != undefined ? thema.textColor.primary : "#64FFDA" : "#64FFDA"}; 
                        border-bottom-color: ${thema != undefined ? thema.textColor != undefined ? thema.textColor.primary : "#64FFDA" : "#64FFDA"}; 
                        border-top-color:${thema != undefined ? thema.textColor != undefined ? thema.textColor.primary : "#64FFDA" : "#64FFDA"}; 
                    } 
                    
                  `}
              </style>
    </>
  );
}
