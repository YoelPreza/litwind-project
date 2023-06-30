import { LitElement, html, css } from 'lit';
import {TWStyles} from '../twlit'

export class InicioELement extends LitElement {
    static styles = [ TWStyles,
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <main  class="flex flex-col md:flex-row ">

        <div class="lg:w-1/2 w-full h-screen bg-[url('./src/images/shop-girl.png')] bg-center bg-cover bg-no-repeat">

        </div>
        <div class="lg:w-1/2 p-10 w-full bg-pink-700 flex flex-col justify-center items-center">
          <h1 class="text-pink-200 text-5xl text-center font-bold font-sans">Miralo, crealo, <br> pruebalo, <br> hazlo</h1>
          <p class="text-pink-300 text-3xl text-center w-1/2 my-10">
          Lo mejor de Brand es descubrir cosas e ideas nuevas de personas de todo el mundo.
          </p>
          <a href="#" class="bg-yellow-200 p-4 rounded-full text-pink-700 capitalize font-bold">explorar</a>
        </div>

      </main>
        `;
    }
}
customElements.define('inicio-element', InicioELement);
