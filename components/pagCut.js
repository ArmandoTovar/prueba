
import Image from 'next/image'
import { useEffect , useState} from 'react';
import Style from './pagCut.module.css'

export default function PagCut() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);
const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};

    return (
        <div className="u-body u-xl-mode"><header className="u-clearfix u-header u-header" id="sec-edd5"><div className="u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xs u-sheet-1">
        <nav className="u-align-left u-menu u-menu-dropdown u-nav-spacing-25 u-offcanvas u-menu-1">
          <div className="menu-collapse">
            <a className="u-button-style u-nav-link" href="#" >
              <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 302 302" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-7b92"></use></svg>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-7b92" x="0px" y="0px" viewBox="0 0 302 302"  xmlSpace="preserve" className="u-svg-content"><g><rect y="36" width="302" height="30"></rect><rect y="236" width="302" height="30"></rect><rect y="136" width="302" height="30"></rect>
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </a>
          </div>
          <div className="u-custom-menu u-nav-container">
            <ul className="u-nav u-spacing-30 u-unstyled"><li className="u-nav-item"><a className="u-button-style u-nav-link" href="Inicio.html#sec-bceb" data-page-id="78970717">Inicio</a>
</li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="" data-page-id="78970717" >Nosotros</a>
</li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="" data-page-id="78970717" >Contactos</a>
</li></ul>
          </div>
          <div className="u-custom-menu u-nav-container-collapse">
            <div className="u-align-center u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
              <div className="u-inner-container-layout u-sidenav-overflow">
                <div className="u-menu-close"></div>
                <ul className="u-align-center u-nav u-popupmenu-items u-spacing-0 u-unstyled u-nav-2"><li className="u-nav-item"><a className="u-button-style u-nav-link" href="Inicio.html#sec-bceb" data-page-id="78970717">Inicio</a>
</li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="" data-page-id="78970717">Nosotros</a>
</li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="" data-page-id="78970717">Contactos</a>
</li></ul>
              </div>
            </div>
            <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
          </div>
        </nav>
        <a href="#" className="u-align-left-lg u-align-left-md u-align-left-sm u-align-left-xs u-hidden-sm u-hidden-xs u-hover-feature u-image u-logo u-image-1" src="" data-image-width="1000" data-image-height="780">
          <div className='u-logo-image u-logo-image-1'>
        <Image layout='fill' src="/images/larm.svg" alt='' className=""/></div>
        </a>
      </div></header> 
    <section className="u-clearfix u-image u-section-1" id="sec-bceb">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className='u-image u-image-default u-image-1'> 
        <Image layout='fill' src="/images/circlegradient2.png" alt="" className=""/></div>
        <div className="u-container-style u-group u-group-1">
          <div className="u-container-layout u-valign-middle-md u-container-layout-1">
            <h1 className="u-text u-text-body-alt-color u-title u-text-1">WEB<br/>Developers
            </h1>
            <p className="u-large-text u-text u-text-body-alt-color u-text-variant u-text-2">Desarrollos de sitios web al mejor precio del mercado, buscando soluciones con buen rendimiento.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="u-clearfix u-section-2" id="sec-e50a">
      <div className='u-image u-image-default u-image-1'>
      <Image layout='fill' src="/images/bubbles2.png"  alt="" className=""/></div>
      <div className="u-container-style u-expanded-width-xs u-group u-group-1">
        <div className="u-container-layout u-container-layout-1">
          <h5 className="u-text u-text-1">Nuevas Tecnologias</h5>
          <div className="u-border-16 u-border-palette-2-light-1 u-line u-line-horizontal u-line-1"></div>
          <h2 className="u-text u-text-palette-1-base u-text-2"> React&nbsp;Framework</h2>
          <p className="u-text u-text-3"> Next.js le brinda la mejor experiencia de desarrollador con todas las funciones que necesita para la producción: renderizado híbrido estático y de servidor, compatibilidad con TypeScript, agrupación inteligente, búsqueda previa de ruta y más. No se necesita configuración</p>
          <a href="https://nextjs.org" className="u-btn u-button-style u-text-palette-1-base u-btn-1">learn more</a>
        </div>
      </div>
    </section>
    <section className="u-clearfix u-image u-section-3" id="sec-1848" data-image-width="1980" data-image-height="1038">
      <div className='u-image u-image-default u-image-1'>
    <Image layout='fill' src="/images/bubbles.png" alt="" className="" data-image-width="700" data-image-height="813"/></div>
      <div alt="" className="u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-image u-image-circle u-image-2"></div>
      <div className='u-image u-image-contain u-image-default u-image-3'>
      <Image layout='fill' src="/circlegradient2.png" alt="" className="" data-image-width="307" data-image-height="307"/></div>
      <div className="u-clearfix u-expanded-width-sm u-expanded-width-xs u-gutter-30 u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-container-style u-layout-cell u-left-cell u-size-15 u-size-30-md u-layout-cell-1">
              <div className="u-container-layout">
                <div className='u-expanded-width u-image u-image-4'>
                <Image layout='fill' src="/images/788.jpg" alt=''/></div>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-size-30-md u-layout-cell-2">
              <div className="u-container-layout">
              <div className='u-expanded-width u-image u-image-5'>
              <Image layout='fill' src="/images/Untitled8.jpg" alt=''/>
                </div>
              </div>
            </div>
            <div className="u-container-style u-layout-cell u-size-15 u-size-30-md u-layout-cell-3">
              <div className="u-container-layout">
              <div className='u-expanded-width u-image u-image-6'>
              <Image layout='fill' src="/images/Untitled10.jpg" alt=''/>
                </div>
              </div>
            </div>
            <div className="u-container-style u-image u-layout-cell u-right-cell u-size-15 u-size-30-md u-image-7">
              <div className="u-container-layout"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-container-style u-expanded-width-sm u-expanded-width-xs u-group u-group-1">
        <div className="u-container-layout u-valign-middle u-container-layout-5">
          <p className="u-text u-text-body-alt-color u-text-1"> Máxima flexibilidad en la producción. Alivio de los empleados al realizar pasos de trabajo ergonómicamente desfavorables que antes no podían automatizarse</p>
        </div>
      </div>
    </section>
    <section className="u-clearfix u-section-4" id="carousel_b746">
      <div className='u-image u-image-default u-image-1'>  <Image layout='fill' src="/images/bubbles9.png" alt="" className="" data-image-width="554" data-image-height="623"/></div>
    
      <div className="u-container-style u-expanded-width-xs u-group u-group-1">
        <div className="u-container-layout u-container-layout-1">
          <h5 className="u-text u-text-1">Technology News</h5>
          <h2 className="u-text u-text-palette-1-base u-text-2">SCADA</h2>
        </div>
      </div>
      <div className="u-clearfix u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-gutter-10 u-layout-spacing-vertical u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-row">
            <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-20 u-size-20-md u-layout-cell-1">
              <div className="u-container-layout u-valign-middle-xs u-container-layout-2"><span className="u-align-left u-icon u-text-palette-2-base u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-315e"></use></svg><svg className="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px" id="svg-315e" ><g><g><path d="M438.942,451.898c-5.518,0-9.997,4.479-9.997,9.997s4.479,9.997,9.997,9.997s9.997-4.479,9.997-9.997    S444.46,451.898,438.942,451.898z"></path>
</g>
</g><g><g><path d="M375.962,451.898c-5.518,0-9.997,4.479-9.997,9.997s4.479,9.997,9.997,9.997s9.997-4.479,9.997-9.997    S381.48,451.898,375.962,451.898z"></path>
</g>
</g><g><g><path d="M315.981,451.898c-5.518,0-9.997,4.479-9.997,9.997s4.479,9.997,9.997,9.997s9.997-4.479,9.997-9.997    S321.499,451.898,315.981,451.898z"></path>
</g>
</g><g><g><path d="M250.002,451.898c-5.518,0-9.997,4.479-9.997,9.997s4.479,9.997,9.997,9.997s9.997-4.479,9.997-9.997    S255.52,451.898,250.002,451.898z"></path>
</g>
</g><g><g><path d="M190.021,451.898c-5.518,0-9.997,4.479-9.997,9.997s4.479,9.997,9.997,9.997s9.997-4.479,9.997-9.997    S195.539,451.898,190.021,451.898z"></path>
</g>
</g><g><g><path d="M130.04,451.898c-5.518,0-9.997,4.479-9.997,9.997s4.479,9.997,9.997,9.997s9.997-4.479,9.997-9.997    S135.558,451.898,130.04,451.898z"></path>
</g>
</g><g><g><path d="M70.059,451.898c-5.518,0-9.997,4.479-9.997,9.997s4.479,9.997,9.997,9.997s9.997-4.479,9.997-9.997    S75.577,451.898,70.059,451.898z"></path>
</g>
</g><g><g><path d="M461.935,411.83h-12.996V309.943c0-5.521-4.476-9.997-9.997-9.997h-82.974c-5.521,0-9.997,4.476-9.997,9.997V411.83    h-85.973V279.952c0-17.576-5.593-34.255-16.176-48.233c-9.723-12.843-23.341-22.586-38.547-27.651l-65.612-62.422l204.269-24.848    c3.594,4.004,7.617,7.559,12.035,10.634v32.558h-9.997c-3.787,0-7.248,2.139-8.941,5.526l-19.994,39.987    c-1.924,3.849-1.17,8.497,1.872,11.539l39.987,39.987c3.904,3.904,10.234,3.904,14.139,0c3.904-3.904,3.904-10.234,0-14.139    l-34.893-34.892l14.009-28.016h87.612l14.009,28.016l-34.893,34.892c-3.904,3.904-3.904,10.234,0,14.139    c1.952,1.952,4.511,2.928,7.069,2.928c2.558,0,5.117-0.976,7.069-2.928l39.987-39.987c3.042-3.043,3.797-7.691,1.872-11.539    l-19.994-39.987c-1.693-3.387-5.155-5.526-8.941-5.526h-9.997v-32.554c18.63-13.008,29.99-34.497,29.99-57.418    c0-38.586-31.392-69.978-69.978-69.978c-25.977,0-49.492,14.25-61.618,36.801L90.729,42.03c-0.877,0.019-1.719,0.161-2.524,0.39    c-5.905-1.579-11.988-2.392-18.146-2.392c-38.586,0-69.978,31.392-69.978,69.978c0,37.28,29.305,67.839,66.088,69.864    l45.451,58.657c-7.583,12.456-11.57,26.627-11.57,41.425v131.877H50.065c-13.368,0-25.939,5.209-35.397,14.668    C5.209,435.956,0,448.526,0,461.895c0,27.606,22.459,50.065,50.065,50.065h411.87c13.368,0,25.939-5.209,35.397-14.668    c9.459-9.458,14.668-22.029,14.668-35.397C512,434.289,489.541,411.83,461.935,411.83z M415.949,159.99h-39.987v-22.91    c6.457,1.921,13.194,2.916,19.994,2.916c6.8,0,13.537-0.995,19.994-2.916V159.99z M349.882,50.598    c0-0.001,0.001-0.002,0.001-0.003c7.839-18.565,25.923-30.56,46.072-30.56c27.561,0,49.984,22.423,49.984,49.984    c0,17.79-9.579,34.382-25.001,43.301c-7.555,4.373-16.194,6.683-24.983,6.683c-8.789,0-17.429-2.311-24.985-6.684    c-5.817-3.365-10.82-7.784-14.874-13.143c-6.623-8.732-10.124-19.161-10.124-30.157C345.973,63.271,347.288,56.737,349.882,50.598    z M365.965,319.94h62.98v91.971h-62.98V319.94z M197.158,222.46c0.006,0.002,0.013,0.004,0.02,0.006    c25.216,7.501,42.827,31.14,42.827,57.487c0,33.074-26.907,59.981-59.981,59.981s-59.981-26.908-59.981-59.981    c0-13.049,4.117-25.449,11.907-35.864c11.45-15.327,28.973-24.117,48.074-24.117C185.884,219.971,191.648,220.808,197.158,222.46z     M240.005,332.767v79.144H120.043v-79.144c14.666,16.636,36.112,27.16,59.981,27.16S225.339,349.402,240.005,332.767z     M327.201,56.991c-0.803,4.264-1.223,8.612-1.223,13.027c0,9.831,2.009,19.336,5.87,28.109l-192.779,23.451    c0.632-3.798,0.968-7.659,0.968-11.572c0-18.577-7.315-35.853-19.619-48.611L327.201,56.991z M68.035,159.938    c-26.626-1.066-47.961-23.05-47.961-49.932c0-27.561,22.423-49.984,49.984-49.984c5.483,0,10.882,0.883,16.046,2.624    c20.3,6.876,33.938,25.908,33.938,47.36c0,6.748-1.316,13.282-3.913,19.426c-0.683,1.617-1.479,3.251-2.354,4.834    c-8.258,14.844-23.587,24.476-40.49,25.594C71.573,159.424,69.761,159.441,68.035,159.938z M89.422,177.238    c13.526-3.916,25.662-11.866,34.681-22.8l48.266,45.919c-17.976,1.753-34.932,9.62-47.902,22.108L89.422,177.238z M483.079,483.04    c-5.651,5.651-13.161,8.764-21.144,8.764H50.065c-16.493,0-29.909-13.417-29.909-29.91c0-7.983,3.113-15.493,8.765-21.145    c5.651-5.651,13.161-8.764,21.144-8.764h59.981c0.414,0,0.82-0.032,1.221-0.081h137.515c0.401,0.049,0.807,0.081,1.221,0.081    h105.966c0.414,0,0.82-0.032,1.221-0.081h80.534c0.401,0.049,0.807,0.081,1.221,0.081h22.993c16.492,0,29.909,13.417,29.909,29.91    C491.844,469.878,488.731,477.388,483.079,483.04z"></path>
</g>
</g><g><g><path d="M395.956,40.028c-16.537,0-29.991,13.454-29.991,29.991c0,16.537,13.454,29.99,29.991,29.99    c16.537,0,29.99-13.454,29.99-29.99C425.946,53.482,412.492,40.028,395.956,40.028z M395.956,80.016    c-5.512,0-9.997-4.485-9.997-9.997s4.485-9.997,9.997-9.997s9.997,4.485,9.997,9.997S401.468,80.016,395.956,80.016z"></path>
</g>
</g><g><g><path d="M70.059,80.016c-16.537,0-29.991,13.454-29.991,29.991c0,16.537,13.454,29.99,29.991,29.99s29.991-13.454,29.991-29.99    C100.049,93.469,86.596,80.016,70.059,80.016z M70.059,120.003c-5.512,0-9.997-4.485-9.997-9.997c0-5.512,4.485-9.997,9.997-9.997    s9.997,4.485,9.997,9.997C80.056,115.518,75.571,120.003,70.059,120.003z"></path>
</g>
</g><g><g><path d="M180.024,239.965c-22.049,0-39.987,17.937-39.987,39.987c0,22.049,17.938,39.987,39.987,39.987    s39.987-17.938,39.987-39.987C220.011,257.903,202.073,239.965,180.024,239.965z M180.024,299.946    c-11.025,0-19.994-8.969-19.994-19.994c0-11.024,8.969-19.994,19.994-19.994c11.024,0,19.994,8.969,19.994,19.994    C200.018,290.977,191.049,299.946,180.024,299.946z"></path>
</g>
</g></svg></span>
                <h3 className="u-text u-text-palette-1-base u-text-3">Automatizacion</h3>
                <p className="u-text u-text-4">Automatizacion de sistemas industriales. PLC Siemens S7, RTU Lafontir , SICAM PAS, PACIS, Gateway D400. MicroScada WinCC , MIRAGE , Spectrum .</p>
              </div>
            </div>
            <div className="u-align-left u-container-style u-layout-cell u-size-20 u-size-20-md u-layout-cell-2">
              <div className="u-container-layout u-valign-middle-xs u-container-layout-3"><span className="u-align-left u-icon u-text-palette-2-base u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512.014 512.014" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-4097"></use></svg><svg className="u-svg-content" viewBox="0 0 512.014 512.014" x="0px" y="0px" id="svg-4097" ><g><g><path d="M256.013,0.014h-42.667c-88.324,0.1-159.9,71.676-160,160v17.931L1.336,272.195c-0.866,1.579-1.321,3.351-1.323,5.152    c-0.018,0.606-0.018,1.213,0,1.819c0.502,17.171,14.829,30.684,32,30.181c7.758,0.431,15.2,3.218,21.333,7.989v34.677    c-0.024,0.815-0.024,1.631,0,2.447c0.676,22.888,19.778,40.896,42.667,40.22h64c0.606,0.018,1.213,0.018,1.819,0    c17.171-0.502,30.684-14.829,30.181-32v-64H170.68v64c0.062,0.634,0.062,1.273,0,1.907c-0.527,5.365-5.302,9.286-10.667,8.76h-64    c-0.851,0.054-1.705,0.054-2.556,0c-11.076-0.706-19.483-10.257-18.777-21.333v-39.765c0.001-3.055-1.308-5.964-3.595-7.989    c-10.698-9.857-24.539-15.612-39.072-16.245c-0.047,0.006-0.095,0.011-0.142,0.016c-5.143,0.545-9.755-3.182-10.301-8.326    l51.787-93.867c0.866-1.579,1.321-3.351,1.323-5.152v-20.672C74.768,83.467,136.8,21.435,213.347,21.347h42.539    c0.649-0.069,1.304-0.073,1.954-0.012c5.39,0.507,9.348,5.288,8.841,10.678v53.333h21.333V32.014c0.018-0.606,0.018-1.213,0-1.819    C287.511,13.024,273.184-0.489,256.013,0.014z"></path>
</g>
</g><g><g><path d="M437.347,320.014H320.013v21.333h117.333c0.634-0.062,1.273-0.062,1.907,0c5.365,0.527,9.287,5.302,8.76,10.667v20.16    c-1.536,6.368-11.819,43.84-42.667,43.84c-5.891,0-10.667,4.776-10.667,10.667v64H192.013v-32H170.68v42.667    c0,5.891,4.776,10.667,10.667,10.667h224v0c5.891,0,10.667-4.776,10.667-10.667v-64.939c33.344-6.304,49.237-41.483,53.12-60.928    c0.143-0.702,0.214-1.417,0.213-2.133v-21.333c0.018-0.606,0.018-1.213,0-1.819C468.845,333.024,454.518,319.511,437.347,320.014z    "></path>
</g>
</g><g><g><path d="M501.347,128.014h-26.891c-1.129-3.169-2.421-6.277-3.872-9.312l19.029-19.029c4.164-4.165,4.164-10.917,0-15.083    l-30.176-30.176c-4.165-4.164-10.917-4.164-15.083,0l-19.029,19.029c-3.036-1.445-6.144-2.733-9.312-3.861V42.68    c0-5.891-4.776-10.667-10.667-10.667H362.68c-5.891,0-10.667,4.776-10.667,10.667v26.901c-5.808,2.051-11.402,4.662-16.704,7.797    l10.837,18.368c5.998-3.531,12.461-6.206,19.2-7.947c4.709-1.216,7.999-5.462,8-10.325V53.347h21.333v24.128    c-0.006,4.861,3.275,9.111,7.979,10.336c6.739,1.741,13.202,4.416,19.2,7.947c4.192,2.477,9.529,1.801,12.971-1.643l17.067-17.067    l15.093,15.061l-17.067,17.067c-3.447,3.439-4.127,8.777-1.653,12.971c3.538,5.997,6.22,12.46,7.968,19.2    c1.215,4.705,5.456,7.994,10.315,8h24.128v21.323h-24.107c-4.859,0.006-9.1,3.295-10.315,8c-1.748,6.74-4.43,13.203-7.968,19.2    c-2.474,4.194-1.794,9.531,1.653,12.971l17.067,17.067l-15.083,15.083l-17.067-17.067c-3.442-3.444-8.779-4.12-12.971-1.643    c-5.998,3.531-12.461,6.206-19.2,7.947c-4.709,1.216-7.999,5.462-8,10.325v24.128h-21.333v-24.117    c-0.001-4.863-3.291-9.11-8-10.325c-6.739-1.741-13.202-4.416-19.2-7.947c-4.192-2.477-9.529-1.801-12.971,1.643L316.12,243    l-15.083-15.083l17.067-17.067c3.447-3.439,4.128-8.777,1.653-12.971c-3.538-5.997-6.22-12.46-7.968-19.2    c-1.215-4.705-5.456-7.994-10.315-8H266.68v21.333h26.901c1.125,3.169,2.414,6.277,3.861,9.312l-19.029,19.029    c-4.164,4.165-4.164,10.917,0,15.083l30.176,30.176c4.165,4.164,10.917,4.164,15.083,0l19.029-19.029    c3.036,1.445,6.144,2.733,9.312,3.861v26.901c0,5.891,4.776,10.667,10.667,10.667h42.667l0,0c5.891,0,10.667-4.776,10.667-10.667    v-26.891c3.168-1.128,6.276-2.417,9.312-3.861l19.029,19.019c4.165,4.164,10.917,4.164,15.083,0l30.176-30.176    c4.164-4.165,4.164-10.917,0-15.083l-19.04-19.029c1.451-3.035,2.743-6.143,3.872-9.312h26.901    c5.891,0,10.667-4.776,10.667-10.667V138.68C512.013,132.789,507.238,128.014,501.347,128.014z"></path>
</g>
</g><g><g><path d="M384.013,117.347c-23.564,0-42.667,19.103-42.667,42.667s19.102,42.667,42.667,42.667    c23.564,0,42.667-19.103,42.667-42.667S407.578,117.347,384.013,117.347z M384.013,181.347c-11.782,0-21.333-9.551-21.333-21.333    c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333C405.347,171.796,395.796,181.347,384.013,181.347z"></path>
</g>
</g><g><g><path d="M160.013,170.68v10.667h-32V170.68H106.68v10.667c-0.006,0.295-0.006,0.589,0,0.884    c0.244,11.538,9.795,20.693,21.333,20.449h32c0.295,0.006,0.589,0.006,0.884,0c11.538-0.244,20.693-9.795,20.449-21.333V170.68    H160.013z"></path>
</g>
</g><g><g><path d="M298.68,298.68c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32c17.673,0,32-14.327,32-32    C330.68,313.007,316.353,298.68,298.68,298.68z M298.68,341.347c-5.891,0-10.667-4.776-10.667-10.667    c0-5.891,4.776-10.667,10.667-10.667c5.891,0,10.667,4.776,10.667,10.667C309.347,336.571,304.571,341.347,298.68,341.347z"></path>
</g>
</g><g><g><path d="M181.347,245.347c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32c17.673,0,32-14.327,32-32    C213.347,259.674,199.02,245.347,181.347,245.347z M181.347,288.014c-5.891,0-10.667-4.776-10.667-10.667    c0-5.891,4.776-10.667,10.667-10.667c5.891,0,10.667,4.776,10.667,10.667C192.013,283.238,187.238,288.014,181.347,288.014z"></path>
</g>
</g><g><g><path d="M277.347,74.68c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32c17.673,0,32-14.327,32-32    C309.347,89.007,295.02,74.68,277.347,74.68z M277.347,117.347c-5.891,0-10.667-4.776-10.667-10.667s4.776-10.667,10.667-10.667    c5.891,0,10.667,4.776,10.667,10.667S283.238,117.347,277.347,117.347z"></path>
</g>
</g><g><g><rect x="224.013" y="170.68" width="21.333" height="21.333"></rect>
</g>
</g><g><g><rect x="224.013" y="213.347" width="21.333" height="21.333"></rect>
</g>
</g><g><g><rect x="170.68" y="416.014" width="21.333" height="21.333"></rect>
</g>
</g></svg></span>
                <h3 className="u-text u-text-palette-1-base u-text-5">Ingenieria</h3>
                <p className="u-text u-text-6">Pruebas de Protecciones electricas para Transformadores, Circuitos de Distribucion y Lineas de Transmision.&nbsp;<br/>Maleta de prueba OMICRON
                </p>
              </div>
            </div>
            <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-layout-cell-3">
              <div className="u-container-layout u-valign-middle-xs u-container-layout-4"><span className="u-align-left u-icon u-text-palette-2-base u-icon-3">
              <svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" >
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-1a53"></use></svg>
              <svg className="u-svg-content" viewBox="0 0 512 512" id="svg-1a53">
              <path d="m466.070312 158.75c4.988282-7.136719 7.929688-15.808594 7.929688-25.15625v-13.039062c3.832031-1.402344 6.574219-5.070313 6.574219-9.386719v-3.097657c0-27.886718-22.6875-50.574218-50.574219-50.574218s-50.574219 22.6875-50.574219 50.574218v3.097657c0 4.316406 2.742188 7.984375 6.574219 9.386719v13.039062c0 9.347656 2.9375 18.019531 7.929688 25.15625-25.0625 5.132812-44.222657 26.628906-45.8125 52.796875h-58.117188c-5.523438 0-10 4.476563-10 10v62h-40.566406v-62c0-5.523437-4.480469-10-10-10h-72c-5.523438 0-10 4.476563-10 10v62h-36v-133.421875l69.703125-69.703125 46.523437 46.519531c3.707032 3.710938 8.136719 6.273438 12.839844 7.695313v16.886719l-20.902344 20.902343c-1.875 1.875-2.929687 4.417969-2.929687 7.070313v18.46875c0 5.519531 4.480469 10 10 10 5.523437 0 10-4.480469 10-10v-14.324219l13.832031-13.832031 13.832031 13.832031v12.824219c0 5.523437 4.480469 10 10 10 5.523438 0 10-4.476563 10-10v-16.96875c0-2.652344-1.054687-5.195313-2.929687-7.070313l-20.902344-20.902343v-17.59375c3.9375-1.5 7.628906-3.824219 10.796875-6.988282 5.828125-5.828125 9.039063-13.578125 9.039063-21.820312 0-8.242188-3.210938-15.988282-9.039063-21.816406l-72.574219-72.578126c-.019531-.015624-.039062-.03125-.054687-.046874-14.355469-14.265626-37.640625-14.238282-51.964844.078124l-88.542969 88.542969c-20.5625 4.011719-36.136718 22.152344-36.136718 43.875v51.789063c0 5.519531 4.480468 10 10 10 5.523437 0 10-4.480469 10-10v-14.558594c7.082031 4.71875 15.578124 7.472656 24.703124 7.472656 9.128907 0 17.625-2.753906 24.707032-7.472656v106.714844c-.472656.199218-.933594.414062-1.398438.628906-7.449218-2.777344-15.277344-4.203125-23.308594-4.203125-8.726562 0-17.058593 1.699219-24.703124 4.757813v-19.34375c0-5.519532-4.476563-10-10-10-5.523438 0-10 4.480468-10 10v31.816406c-13.515626 12.222656-22.023438 29.882812-22.023438 49.496094v151.691406c0 5.519531 4.476562 10 10 10h456c5.519531 0 10-4.480469 10-10v-166.808594c20.078125-1.363281 36-18.125 36-38.546875v-81.546875c0-27.738281-19.75-50.953125-45.929688-56.3125zm-36.609374-1.167969c-12.984376-.289062-23.460938-10.933593-23.460938-23.988281v-12.425781h48v12.425781c0 13.054688-10.476562 23.699219-23.460938 23.988281zm30.328124-56.414062h-19.789062v-21.988281c9.835938 3.417968 17.410156 11.71875 19.789062 21.988281zm-39.789062-21.988281v21.988281h-19.789062c2.378906-10.269531 9.953124-18.570313 19.789062-21.988281zm-7 224.367187c13.785156 0 25 11.214844 25 25s-11.214844 25-25 25h-304c-13.785156 0-25-11.214844-25-25s11.214844-25 25-25zm-9 70h9c2.382812 0 4.71875-.191406 7-.546875v118.964844h-16zm-339.46875-38.097656c1.421875 9.21875 5.664062 17.515625 11.800781 23.996093-2.554687 2.414063-5.964843 3.8125-9.605469 3.8125-7.71875 0-14-6.277343-14-14 0-6.96875 5.125-12.75 11.804688-13.808593zm235.46875-103.902344h52v52h-52zm-132.566406 0h52v52h-52zm-20.585938-168.914063c4.210938 4.207032 9.261719 7.261719 14.777344 9.015626l-53.84375 53.84375c-4.601562-10.636719-13.210938-19.144532-23.921875-23.605469l54.007813-54.003907c1.71875 5.394532 4.707031 10.472657 8.980468 14.75zm113.488282 42.488282c0 2.898437-1.132813 5.625-3.183594 7.675781-4.230469 4.234375-11.121094 4.234375-15.351563 0l-46.523437-46.519531 3.476562-3.472656c4.199219-4.203126 7.25-9.246094 9.015625-14.746094l49.382813 49.386718c2.050781 2.050782 3.183594 4.777344 3.183594 7.675782zm-75.726563-80.21875c3.175781 3.171875 4.921875 7.390625 4.921875 11.878906 0 4.089844-1.464844 7.945312-4.121094 11-.269531.21875-.535156.453125-.789062.707031-6.515625 6.515625-17.117188 6.515625-23.632813 0-6.511719-6.515625-6.511719-17.113281 0-23.628906.152344-.152344.289063-.3125.429688-.472656 6.585937-6.011719 16.824219-5.855469 23.191406.515625zm-117.882813 142.976562c-13.621093 0-24.703124-11.082031-24.703124-24.703125 0-13.625 11.082031-24.707031 24.703124-24.707031 13.625 0 24.707032 11.082031 24.707032 24.707031 0 13.621094-11.082032 24.703125-24.707032 24.703125zm-46.726562 182.394532c0-25.765626 20.960938-46.726563 46.726562-46.726563 1.589844 0 3.164063.082031 4.722657.238281-2.328125 3.519532-4.179688 7.378906-5.449219 11.492188-18.414062.390625-33.273438 15.476562-33.273438 33.980468 0 18.75 15.253907 34 34 34 10.414063 0 20.046876-4.703124 26.425782-12.601562 4.933594 1.863281 10.273437 2.890625 15.847656 2.890625h4.457031v118.414063h-93.457031zm364 141.691406h-250.542969v-70.417969h117.042969c5.523438 0 10-4.480469 10-10 0-5.523437-4.476562-10-10-10h-117.042969v-28h250.542969zm56 0v-127.441406c7.488281-5.636719 13.167969-13.546876 16-22.699219v150.140625zm52-195.355469c0 9.382813-6.972656 17.148437-16 18.441406v-85.023437c0-5.523438-4.476562-10-10-10s-10 4.476562-10 10v62.082031.019531 23.140625c-5.679688-18.351562-22.808594-31.722656-43-31.722656h-9v-53.519531c0-5.523438-4.476562-10-10-10s-10 4.476562-10 10v53.519531h-12v-62c0-3.25-1.558594-6.132813-3.960938-7.957031.777344-19.988282 17.269532-36.007813 37.445313-36.007813h23.976563c.179687 0 .359374.011719.539062.011719.183594 0 .359375-.007812.539062-.011719h23.980469c20.667969 0 37.480469 16.8125 37.480469 37.480469zm0 0"></path><path d="m32.019531 244.964844c2.628907 0 5.210938-1.070313 7.070313-2.933594 1.871094-1.859375 2.929687-4.4375 2.929687-7.066406 0-2.632813-1.058593-5.210938-2.929687-7.070313-1.859375-1.863281-4.429688-2.929687-7.070313-2.929687-2.628906 0-5.210937 1.066406-7.070312 2.929687-1.859375 1.859375-2.929688 4.4375-2.929688 7.070313 0 2.628906 1.070313 5.207031 2.929688 7.066406 1.859375 1.863281 4.441406 2.933594 7.070312 2.933594zm0 0"></path><path d="m66.730469 133.171875c-2.640625 0-5.210938 1.070313-7.070313 2.929687-1.859375 1.863282-2.929687 4.441407-2.929687 7.070313 0 2.640625 1.070312 5.210937 2.929687 7.070313 1.859375 1.859374 4.429688 2.929687 7.070313 2.929687 2.628906 0 5.207031-1.070313 7.070312-2.929687 1.859375-1.859376 2.929688-4.4375 2.929688-7.070313 0-2.628906-1.070313-5.207031-2.929688-7.070313-1.863281-1.859374-4.441406-2.929687-7.070312-2.929687zm0 0"></path><path d="m165.730469 43.742188c1.867187 1.859374 4.4375 2.929687 7.070312 2.929687 2.636719 0 5.207031-1.070313 7.078125-2.929687 1.859375-1.859376 2.929688-4.4375 2.929688-7.070313 0-2.628906-1.070313-5.207031-2.929688-7.070313-1.871094-1.855468-4.441406-2.929687-7.078125-2.929687-2.632812 0-5.203125 1.070313-7.070312 2.929687-1.859375 1.863282-2.921875 4.441407-2.921875 7.070313 0 2.632813 1.0625 5.210937 2.921875 7.070313zm0 0"></path><path d="m202 318.542969c-2.628906 0-5.210938 1.070312-7.070312 2.929687-1.859376 1.863282-2.929688 4.441406-2.929688 7.070313 0 2.628906 1.070312 5.210937 2.929688 7.070312 1.859374 1.867188 4.441406 2.929688 7.070312 2.929688s5.210938-1.0625 7.070312-2.929688c1.859376-1.859375 2.929688-4.441406 2.929688-7.070312 0-2.628907-1.070312-5.210938-2.929688-7.070313-1.859374-1.859375-4.441406-2.929687-7.070312-2.929687zm0 0"></path><path d="m138 318.542969c-2.628906 0-5.210938 1.070312-7.070312 2.929687-1.859376 1.863282-2.929688 4.441406-2.929688 7.070313 0 2.640625 1.070312 5.210937 2.929688 7.070312 1.859374 1.859375 4.429687 2.929688 7.070312 2.929688 2.628906 0 5.210938-1.070313 7.070312-2.929688 1.859376-1.859375 2.929688-4.429687 2.929688-7.070312 0-2.628907-1.070312-5.210938-2.929688-7.070313-1.859374-1.859375-4.441406-2.929687-7.070312-2.929687zm0 0"></path><path d="m394 338.542969c2.628906 0 5.210938-1.0625 7.070312-2.929688 1.859376-1.859375 2.929688-4.429687 2.929688-7.070312 0-2.628907-1.070312-5.210938-2.929688-7.070313-1.859374-1.859375-4.441406-2.929687-7.070312-2.929687s-5.210938 1.070312-7.070312 2.929687c-1.859376 1.863282-2.929688 4.441406-2.929688 7.070313 0 2.640625 1.070312 5.210937 2.929688 7.070312 1.859374 1.871094 4.441406 2.929688 7.070312 2.929688zm0 0"></path><path d="m266 318.542969c-2.628906 0-5.210938 1.070312-7.070312 2.929687-1.859376 1.863282-2.929688 4.441406-2.929688 7.070313 0 2.628906 1.070312 5.210937 2.929688 7.070312 1.859374 1.867188 4.441406 2.929688 7.070312 2.929688s5.210938-1.0625 7.070312-2.929688c1.859376-1.859375 2.929688-4.429687 2.929688-7.070312 0-2.628907-1.070312-5.210938-2.929688-7.070313-1.859374-1.859375-4.441406-2.929687-7.070312-2.929687zm0 0"></path><path d="m330 318.542969c-2.628906 0-5.210938 1.070312-7.070312 2.929687-1.859376 1.863282-2.929688 4.441406-2.929688 7.070313 0 2.628906 1.070312 5.210937 2.929688 7.070312 1.859374 1.867188 4.441406 2.929688 7.070312 2.929688s5.210938-1.0625 7.070312-2.929688c1.859376-1.859375 2.929688-4.441406 2.929688-7.070312 0-2.628907-1.070312-5.210938-2.929688-7.070313-1.859374-1.859375-4.441406-2.929687-7.070312-2.929687zm0 0"></path><path d="m288.898438 421.542969c2.632812 0 5.210937-1.0625 7.070312-2.929688 1.859375-1.859375 2.929688-4.429687 2.929688-7.070312 0-2.628907-1.070313-5.210938-2.929688-7.070313s-4.429688-2.929687-7.070312-2.929687c-2.628907 0-5.210938 1.070312-7.070313 2.929687s-2.929687 4.441406-2.929687 7.070313c0 2.640625 1.070312 5.210937 2.929687 7.070312 1.859375 1.871094 4.441406 2.929688 7.070313 2.929688zm0 0"></path></svg></span>
                <h3 className="u-text u-text-palette-1-base u-text-7">Comunicacion</h3>
                <p className="u-text u-text-8">Redes Industriales redundantes. Protocolos de Comunicacion (Serial, UDP , TCP)&nbsp; DNP 3.0 , MOD BUS , IEC-60870 , IEC-61850.<br/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="u-clearfix u-image u-section-5" id="sec-760a">
      <div className='u-image u-image-default u-image-1'><Image layout='fill' src="/images/bubbles5.png" alt="" className="" data-image-width="576" data-image-height="626"/></div>
      
      <div className="u-container-style u-expanded-width-xs u-group u-group-1">
        <div className="u-container-layout u-valign-bottom-xs u-container-layout-1"><span className="u-icon u-icon-circle u-text-palette-5-base u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 95.333 95.332" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-f380"></use></svg><svg className="u-svg-content" viewBox="0 0 95.333 95.332" x="0px" y="0px" id="svg-f380" ><g><g><path d="M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793    c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045    s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076    c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002    c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"></path><path d="M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019    c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23    c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16    c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312    c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"></path>
</g>
</g></svg></span>
          <p className="u-text u-text-body-alt-color u-text-1">Si alguien puede hacerlo, significa que nosotros tambien podemos hacerlo. Si nadie puede hacerlo, significa que debemos ser los primeros en hacerlo.</p>
          <h5 className="u-align-right u-text u-text-body-alt-color u-text-2">- Logica Japonesa-</h5>
        </div>
      </div>
    </section>
    <section className="u-clearfix u-image u-section-6" id="sec-23e3" data-image-width="1980" data-image-height="1038">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div className="u-gutter-0 u-layout">
            <div className="u-layout-row">
              <div className="u-size-36 u-size-60-md">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-left-cell u-size-60 u-layout-cell-1">
                    <div className="u-container-layout">
                      <div className='u-expanded-width u-image u-image-1'><Image layout='fill' src="/images/mirag.jpg" data-image-width="710" data-image-height="507" alt=''/></div>
                     
                      <div className="u-align-left u-palette-2-light-1 u-shape u-shape-rectangle u-shape-1"></div>
                      <div className='u-image u-image-default u-image-2'> <Image layout='fill' src="/images/anun.jpg" alt="" className="" data-image-width="1920" data-image-height="1070"/></div>
                   
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-size-24 u-size-60-md">
                <div className="u-layout-col">
                  <div className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-right-cell u-size-20 u-layout-cell-2">
                    <div className="u-container-layout u-container-layout-2"></div>
                  </div>
                  <div className="u-align-left-md u-align-left-sm u-container-style u-layout-cell u-right-cell u-size-40 u-layout-cell-3">
                    <div className="u-container-layout u-container-layout-3">
                      <div className="u-border-16 u-border-palette-2-dark-1 u-line u-line-horizontal u-line-1"></div>
                      <h2 className="u-text u-text-body-alt-color u-text-1">IHM</h2>
                      <p className="u-text u-text-body-alt-color u-text-2">Sistemas de&nbsp; supervision y adquisicion de datos propios elaborado en .Net . O implementacion de sistemas de fabricantes reconocidos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="u-clearfix u-gradient u-section-7" id="carousel_9592">
      <div className='u-image u-image-default u-image-1'><Image layout='fill' src="/images/bubbles9.png" alt="" className=""/></div>
     
      <div className="u-container-style u-expanded-width-xs u-group u-group-1">
        <div className="u-container-layout u-valign-bottom-sm u-valign-middle-xs u-container-layout-1">
          <h5 className="u-text u-text-1">AI Perspectives</h5>
          <h2 className="u-text u-text-palette-1-base u-text-2">Fabricantes</h2>
        </div>
      </div>
      <div className="u-clearfix u-expanded-width-xs u-gutter-30 u-layout-spacing-vertical u-layout-wrap u-layout-wrap-1">
        <div className="u-gutter-0 u-layout">
          <div className="u-layout-row">
            <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
              <div className="u-container-layout u-container-layout-2">
                <h3 className="u-text u-text-palette-1-base u-text-3">Manejamos diferentes modelos reconocidos</h3>
                <p className="u-text u-text-4">ABB REx670,DPU,TPU,REx361*4,&nbsp;REx561,&nbsp;REF543<br/>Beckwith M-3310x<br/>Multilin L90 , C60,D60,L30<br/>MiCOM P441, P541 , P543<br/>Schneider Vamp 255, 230,260<br/>SEL 351A,311L<br/>SIEMENS 7SAx,7SDx,7UTx,7SJx,7VKx<br/>Ametek Oscilo<br/>Arcteq F255, F215 ,L3x7<br/>Cooper Power Systems<br/>
                </p>
              </div>
            </div>
            <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
              <div className="u-container-layout u-container-layout-3">
                <div className='u-expanded-width u-image u-image-default u-image-2'><Image layout='fill' src="/images/IMG_20191101_144411567.jpg" alt="" className="" data-image-width="1200" data-image-height="1600"/></div>
              
                <div className="u-palette-2-light-1 u-shape u-shape-rectangle u-shape-1"></div>
                <div className='u-image u-image-default u-image-3'> <Image layout='fill' src="/images/IMG_20200206_134013101.jpg" alt="" className="" data-image-width="2448" data-image-height="3264"/></div>
               
                <p className="u-text u-text-5">hhh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="u-clearfix u-image u-section-8" id="sec-a96b" data-image-width="1600" data-image-height="839">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-clearfix u-expanded-width u-gutter-30 u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-container-style u-layout-cell u-left-cell u-size-15 u-size-30-md u-layout-cell-1">
                <div className="u-container-layout">
                  <div className='u-expanded-width u-image u-image-1'> <Image layout='fill' src="/images/IMG_20191025_151039452.jpg" data-image-width="1200" data-image-height="1600" alt=''/></div>
                 
                </div>
              </div>
              <div className="u-container-style u-image u-layout-cell u-size-15 u-size-30-md u-image-2" data-image-width="1200" data-image-height="1600">
                <div className="u-container-layout"></div>
              </div>
              <div className="u-container-style u-layout-cell u-size-15 u-size-30-md u-layout-cell-3">
                <div className="u-container-layout">
                  <div className='u-expanded-width u-image u-image-3'>
                  <Image layout='fill' src="/images/IMG_20191126_151928472.jpg" alt=''/></div>
                </div>
              </div>
              <div className="u-container-style u-layout-cell u-right-cell u-size-15 u-size-30-md u-layout-cell-4">
                <div className="u-container-layout">
                  <div className='u-expanded-width u-image u-image-4'><Image layout='fill' src="/images/IMG_20200213_151508018_BURST000_COVER_TOP.jpg" alt=''/></div>
                  
                  <p className="u-text u-text-body-alt-color u-text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    <footer className="u-clearfix u-footer u-palette-3-base u-footer" id="sec-f2e8"><div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-align-center u-container-style u-group u-group-1">
          <div className="u-container-layout">
            <p className="u-text u-text-1">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
            <div className="u-align-left u-social-icons u-spacing-10 u-social-icons-1">
              <a className="u-social-url" target="_blank" href=""><span className="u-icon u-icon-circle u-social-facebook u-social-icon u-icon-1"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112.2 112.2"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-181b"></use></svg><svg x="0px" y="0px" viewBox="0 0 112.2 112.2"  id="svg-181b" className="u-svg-content"><path d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z"></path></svg></span>
              </a>
              <a className="u-social-url" target="_blank" href=""><span className="u-icon u-icon-circle u-social-icon u-social-twitter u-icon-2"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112.2 112.2"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-8dd8"></use></svg><svg x="0px" y="0px" viewBox="0 0 112.2 112.2" id="svg-8dd8" className="u-svg-content"><path d="M92.2,38.2c0,0.8,0,1.6,0,2.3c0,24.3-18.6,52.4-52.6,52.4c-10.6,0.1-20.2-2.9-28.5-8.2 c1.4,0.2,2.9,0.2,4.4,0.2c8.7,0,16.7-2.9,23-7.9c-8.1-0.2-14.9-5.5-17.3-12.8c1.1,0.2,2.4,0.2,3.4,0.2c1.6,0,3.3-0.2,4.8-0.7 c-8.4-1.6-14.9-9.2-14.9-18c0-0.2,0-0.2,0-0.2c2.5,1.4,5.4,2.2,8.4,2.3c-5-3.3-8.3-8.9-8.3-15.4c0-3.4,1-6.5,2.5-9.2 c9.1,11.1,22.7,18.5,38,19.2c-0.2-1.4-0.4-2.8-0.4-4.3c0.1-10,8.3-18.2,18.5-18.2c5.4,0,10.1,2.2,13.5,5.7c4.3-0.8,8.1-2.3,11.7-4.5 c-1.4,4.3-4.3,7.9-8.1,10.1c3.7-0.4,7.3-1.4,10.6-2.9C98.9,32.3,95.7,35.5,92.2,38.2z"></path></svg></span>
              </a>
              <a className="u-social-url" target="_blank" href=""><span className="u-icon u-icon-circle u-social-icon u-social-instagram u-icon-3"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112.2 112.2"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-ce20"></use></svg><svg x="0px" y="0px" viewBox="0 0 112.2 112.2" id="svg-ce20" className="u-svg-content"><path d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z"></path><path d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z"></path><path d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7 V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7 c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z"></path></svg></span>
              </a>
              <a className="u-social-url" target="_blank" href="#" title="Armando"><span className="u-icon u-icon-circle u-social-icon u-social-linkedin u-icon-4"><svg className="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 112.2 112.2"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-35b2"></use></svg><svg x="0px" y="0px" viewBox="0 0 112.2 112.2" id="svg-35b2" className="u-svg-content"><path d="M33.8,96.8H14.5v-58h19.3V96.8z M24.1,30.9L24.1,30.9c-6.6,0-10.8-4.5-10.8-10.1c0-5.8,4.3-10.1,10.9-10.1 S34.9,15,35.1,20.8C35.1,26.4,30.8,30.9,24.1,30.9z M103.3,96.8H84.1v-31c0-7.8-2.7-13.1-9.8-13.1c-5.3,0-8.5,3.6-9.9,7.1 c-0.6,1.3-0.6,3-0.6,4.8V97H44.5c0,0,0.3-52.6,0-58h19.3v8.2c2.6-3.9,7.2-9.6,17.4-9.6c12.7,0,22.2,8.4,22.2,26.1V96.8z"></path></svg></span>
              </a>
            </div>
          </div>
        </div>
      </div></footer>
    <section className="u-backlink u-clearfix u-grey-80">
      <a className="u-link" href="#" target="_blank">
        <span>Website Templates</span>
      </a>
      <p className="u-text">
        <span>created with</span>
      </p>
      <a className="u-link" href="#" target="_blank">
        <span>Online HTML Editor</span>
      </a>. 
    </section> 
            {showTopBtn && (
              <span    onClick={goToTop} className={Style.toTop} data-href="#">
             
             <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><g strokeWidth="72" stroke="hsl(0, 0%, 100%)" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="matrix(-0.7071067811865477,-0.7071067811865475,0.7071067811865475,-0.7071067811865477,400.0000000000001,998.685424949238)"><line x1="372.5" y1="372.5" x2="427.5" y2="427.5" markerEnd="url(#SvgjsMarker1469)"></line></g><defs><marker markerWidth="9.5" markerHeight="9.5" refX="4.75" refY="4.75" viewBox="0 0 9.5 9.5" orient="auto" id="SvgjsMarker1469"><polygon points="0,9.5 3.1666666666666665,4.75 0,0 9.5,4.75" fill="hsl(0, 0%, 100%)"></polygon></marker></defs></svg>

             </span>
            
            )}
             

             </div>
    );
  }
  