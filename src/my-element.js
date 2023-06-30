import { LitElement, css, html } from 'lit'
import { TWStyles } from './twlit.js'


import "./components/navElement.js"
import "./components/servicesElement.js"
import "./components/aboutElement.js"
import './components/inicioElement.js'
import './components/contactElement.js'
import './components/productosElement.js'


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

      <productos-element></productos-element>
      
      <contacto-element></contacto-element>


    `
  }
handleScroll(e){
  const aboutElement = this.shadowRoot.querySelector(e.detail + "-element");
  aboutElement.scrollIntoView({behavior:"smooth"})
}


  static get styles() {
    return [TWStyles]
  }
}

window.customElements.define('my-element', MyElement)
