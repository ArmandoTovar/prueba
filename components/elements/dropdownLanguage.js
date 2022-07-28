import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { setToLS, getFromLS } from '../../utils/storage';
const DropdownLanguage = () => {
    const router = useRouter()
  const [language, setLanguage] = useState("en");

  const handleLangChange = (evt) => {
    const locale = evt.target.value;
    console.log(locale);
    setLanguage(locale);
    setToLS('language',locale);
    router.push(router.asPath,router.asPath, {
        locale,
        scroll: false 
    })
  };
  
  useEffect(() => {
     const data = getFromLS('language') ;
     
    data !== undefined ? setLanguage(data) : setLanguage("en")

  }, []);

  return (
    <><select onChange={handleLangChange} value={language}>
            {router.locales.map((language , index) => (
                <option value={language} key={'le'+index}>
                    {language === "en" ? "EN" : language === "es" ? "ES" : null}
                </option>
            ))}
    </select>
    <style jsx>{
        ` select{
          position:relative;
          float:right;
          background:var(--background);
          border:none;
          color:var(--primary_text)
        }
        select:focus-visible{
          border:none;
        }
         `
    }</style>
    </>
    


  );
};

export default DropdownLanguage;