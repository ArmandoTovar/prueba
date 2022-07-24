
import Style from "./style_component/contact.module.css";
import "animate.css";
export default function Contact() {
  return (  
    <div className={Style.container}>
      <h1>Get In Touch</h1>
      <p className="animate__animated animate__fadeInTopRight">
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
      <button className={Style.link_book}>Say Hello</button>
    </div>
  );
}

