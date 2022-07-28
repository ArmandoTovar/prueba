
export default function Toggle({selectedTheme , setMode}){
    return(     

    <>
    <label>
    <input type="checkbox" checked={selectedTheme != undefined? selectedTheme.id =='T_002':false} onChange={() => {
        selectedTheme.id == 'T_002' ? setMode('dark') : setMode('light')}}/>
  <span></span>
    </label>
    <style jsx>{
        `
        label {
            position: relative; 
            display: inline-block;
            width: 60px;
            height: 34px;
          }
        label input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        span {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 34px;
          background-color: var(--primary_text);
          -webkit-transition: .4s;
          transition: .4s;

        }
        
        span:before {
          position: absolute;
          background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 22.006 22.006' style='enable-background:new 0 0 22.006 22.006;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath style='fill:%23030104;' d='M4.63,6.045c0.394,0.393,1.028,0.399,1.421,0.006c0.39-0.39,0.393-1.021-0.007-1.421l-1.4-1.4 C4.249,2.835,3.617,2.829,3.223,3.223c-0.391,0.39-0.394,1.02,0.007,1.421L4.63,6.045z'/%3E%3Cpath style='fill:%23030104;' d='M20.997,10.003h-1.98c-0.559,0-1.011,0.444-1.011,1c0,0.553,0.443,1,1.011,1h1.98 c0.559,0,1.009-0.443,1.009-1C22.006,10.451,21.562,10.003,20.997,10.003z'/%3E%3Cpath style='fill:%23030104;' d='M4,11.003c0-0.552-0.444-1-1.01-1H1.009c-0.558,0-1.009,0.444-1.009,1c0,0.553,0.443,1,1.009,1 H2.99C3.548,12.003,4,11.56,4,11.003z'/%3E%3Cpath style='fill:%23030104;' d='M11.003,5c-3.313,0-6,2.687-6,6s2.687,6,6,6c3.312,0,6-2.687,6-6S14.315,5,11.003,5z M11.003,15 c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S13.212,15,11.003,15z'/%3E%3Cpath style='fill:%23030104;' d='M4.63,15.962l-1.4,1.4c-0.395,0.395-0.401,1.027-0.007,1.421c0.391,0.39,1.021,0.393,1.421-0.007 l1.4-1.4c0.395-0.395,0.401-1.027,0.007-1.421C5.66,15.563,5.03,15.562,4.63,15.962z'/%3E%3Cpath style='fill:%23030104;' d='M17.376,6.045l1.4-1.401c0.395-0.395,0.399-1.027,0.007-1.421c-0.392-0.39-1.021-0.393-1.421,0.007 l-1.4,1.4c-0.395,0.395-0.4,1.028-0.007,1.421C16.347,6.441,16.976,6.444,17.376,6.045z'/%3E%3Cpath style='fill:%23030104;' d='M11.003,18.006c-0.553,0-1,0.444-1,1.011v1.98c0,0.559,0.444,1.009,1,1.009 c0.553,0,1-0.442,1-1.009v-1.98C12.003,18.458,11.56,18.006,11.003,18.006z'/%3E%3Cpath style='fill:%23030104;' d='M17.376,15.962c-0.395-0.395-1.027-0.4-1.421-0.007c-0.39,0.392-0.394,1.021,0.007,1.421l1.4,1.4 c0.395,0.395,1.027,0.399,1.421,0.007c0.391-0.39,0.394-1.021-0.007-1.421L17.376,15.962z'/%3E%3Cpath style='fill:%23030104;' d='M11.003,4c0.553,0,1-0.443,1-1.01V1.01c0-0.558-0.443-1.01-1-1.01c-0.553,0-1,0.444-1,1.01v1.98 C10.003,3.548,10.447,4,11.003,4z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E");
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          border-radius: 50%;
          background-color: none;
          -webkit-transition: .4s;
          transition: .4s;
        }
        
        input:checked + span {
          background-color: var(--primary_text);
        }
        
        input:focus + span {
          box-shadow: 0 0 1px var(--primary_text);
        }
        
        input:checked + span:before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
          background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23ffffff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3EWondicon - UI (Free)%3C/title%3E%3Cpath class='cls-1' d='M100,175.68a75.68,75.68,0,1,1,13-150.23,5,5,0,0,1-.06,9.86,45,45,0,1,0,39.11,76.22h0A44.7,44.7,0,0,0,164.69,87a5,5,0,0,1,4.91-4.2h0a5,5,0,0,1,4.92,4.14A75.67,75.67,0,0,1,100,175.68ZM87.52,35.53a65.69,65.69,0,1,0,77,77,56.49,56.49,0,0,1-5.28,6.12A55,55,0,0,1,81.4,40.81,55.41,55.41,0,0,1,87.52,35.53Z'/%3E%3Cpath class='cls-1' d='M125,105H100a5,5,0,0,1-3.54-8.54L112.93,80H100a5,5,0,0,1,0-10h25a5,5,0,0,1,3.54,8.54L112.07,95H125a5,5,0,0,1,0,10Z'/%3E%3Cpath class='cls-1' d='M170.68,59.32h-25a5,5,0,0,1-3.54-8.53l16.47-16.47H145.68a5,5,0,0,1,0-10h25a5,5,0,0,1,3.54,8.54L157.75,49.32h12.93a5,5,0,0,1,0,10Z'/%3E%3C/svg%3E");
        }`
    }</style>
    </>
    )
}