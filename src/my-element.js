import { LitElement, css, html } from 'lit'
import { TWStyles } from './twlit.js'


import "./components/navElement.js"
import "./components/servicesElement.js"
import "./components/aboutElement.js"

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
        links='[
          {"name":"Inicio"},
          {"name":"Acerca de"},
          {"name":"Servicios"},
          {"name":"Productos"},
          {"name":"Contacto"}
        ]'
      >
      </nav-element>

      <main class="flex flex-col md:flex-row">

        <div class="lg:w-1/2 w-full h-[calc(100vh-50px)] bg-[url('./src/images/shop-girl.png')] bg-center bg-cover bg-no-repeat">
        </div>
        <div class="lg:w-1/2 p-10 w-full bg-pink-100 flex flex-col justify-center items-center">
          <h1 class="text-red-500 text-5xl text-center font-bold font-sans">Miralo, crealo, <br> pruebalo, <br> hazlo</h1>
          <p class="text-red-500 text-3xl text-center w-1/2 my-10">
          Lo mejor de Brand es descubrir cosas e ideas nuevas de personas de todo el mundo.
          </p>
          <a href="#" class="bg-red-500 p-4 rounded-full text-white capitalize font-bold">explorar</a>
        </div>

      </main>

      <about-element></about-element>

      <services-element></services-element>
      <services-element></services-element>

    `
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return [TWStyles]
  }
}

window.customElements.define('my-element', MyElement)
