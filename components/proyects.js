import Link from "next/link"
import Image from "next/image"
import Style from './proyects.module.css'

import { FaFolder , FaExternalLinkAlt } from 'react-icons/fa';
export default function Proyects(){


const Jobs=[
{link:"https://google.com/",
type:"Algolia WordPress PHP",
title:"WordPress Plugin for Algolia Intergration",
desc:"Building a custom plugin from scratch using php"},

{link:"https://google.com/",
type:"Algolia WordPress PHP",
title:"WordPress Plugin for Algolia Intergration",
desc:"Building a custom plugin from scratch using php"},
{link:"https://google.com/",
type:"Algolia WordPress PHP",
title:"WordPress Plugin for Algolia Intergration",
desc:"Building a custom plugin from scratch using php"},

{link:"https://google.com/",
type:"Algolia WordPress PHP",
title:"WordPress Plugin for Algolia Intergration",
desc:"Building a custom plugin from scratch using php"},

{link:"https://google.com/",
type:"Algolia WordPress PHP",
title:"WordPress Plugin for Algolia Intergration",
desc:"Building a custom plugin from scratch using php"},
{link:"https://google.com/",
type:"Algolia WordPress PHP",
title:"WordPress Plugin for Algolia Intergration",
desc:"Building a custom plugin from scratch using php"},
{link:"https://google.com/",
type:"Algolia WordPress PHP",
title:"WordPress Plugin for Algolia Intergration",
desc:"Building a custom plugin from scratch using php"},
]


    return (
    <div className={Style.proyects}>
           <h6>Other Noteworthy Projects</h6>
           <span>View the archive</span>
            {Jobs.map((e,index)=> {
               if (index<6)
               return(
                
                    <div className={Style.proy} key={"text"+index}>
                         <div>
                            <FaFolder/>
                      <Link href={e.link} passHref={true}><a><FaExternalLinkAlt/></a></Link>
                        </div>
                       <h5>{e.title}</h5>
                       <p>{e.desc}</p>
                       <span>{e.type}</span>
                      
                      
                        

                    </div>
                )
                else
                return
            })}
                
             { Jobs.length > 6 ? <button>Show More</button>:<p></p>}:
             </div>

        
     

        
    )
}