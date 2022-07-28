
import Style from "./style_component/contact.module.css";
import "animate.css";
import useTranslation from 'next-translate/useTranslation';
export default function Contact() {
  const { t } = useTranslation('common');
  return (  
    <div className={Style.container} id="contact">
      <h1>{t('Get In Touch')}</h1>
      <p className="animate__animated animate__fadeInTopRight">
       {t('Im currently looking')}</p>
      <button className={Style.link_book}>{t('Say Hello')}</button>
    </div>
  );
}

