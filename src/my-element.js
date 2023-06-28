import { LitElement, css, html } from 'lit'
import { TWStyles } from './twlit.js'


import "./components/navElement.js"
import "./components/servicesElement.js"
import "./components/aboutElement.js"
import './components/inicioElement.js'

export class MyElement extends LitElement {
  static get properties() {
    return {

    }
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
    this.count = 0
  }

  render() {
    return html`
      <nav-element
       
        @scroll-this="${this.handleScroll}"
      >
      </nav-element>

     <inicio-element></inicio-element>

      <acerca-element></acerca-element>

      <servicios-element></servicios-element>

    `
  }
handleScroll(e){
  // console.log(e.detail);
  // document.querySelector("#inicio")?.scrollIntoView()
  // console.log(this.shadowRoot.querySelector("about-element").querySelectorAll("main"));
  const aboutElement = this.shadowRoot.querySelector(e.detail + "-element");
  aboutElement.scrollIntoView({behavior:"smooth"})
  // if (aboutElement) {
  //   const mainElements = aboutElement.shadowRoot.querySelectorAll("main");
  //   if (mainElements.length > 0) {
  //     // Accede al primer elemento "main" encontrado
  //     const firstMainElement = mainElements[0];
  //     const id = firstMainElement.id;
  //     console.log(id);
      
    // }
  // }
}

  _onClick() {
    this.count++
  }

  static get styles() {
    return [TWStyles]
  }
}

window.customElements.define('my-element', MyElement)
