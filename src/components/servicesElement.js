import { LitElement, html, css } from 'lit';
import {TWStyles} from '../twlit'

export class ServicesELement extends LitElement {
    static styles = [TWStyles,
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`

<main class="flex flex-col items-center justify-center bg-white-200 min-h-screen">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 place-items-center text-center text-slate-800 text-xl font-semibold">
          <div class="flex flex-col items-center my-10">
            <img width="200" class="mx-auto flex" src="src/images/desk_lamp.png" />
            <h3 class="text-red-500">Actividad 1</h3>
            <p class="w-1/2">Primera Actividad de la empresa, algo que la empresa haga como actividad principal</p>  
          </div>
          <div class="flex flex-col items-center my-10">
            <img width="200" src="src/images/laptop-icon.png" />
            <h3 class="text-red-500">Actividad 2</h3>
            <p class="w-1/2 my-2">Primera Actividad de la empresa, algo que la empresa haga como actividad secundaria</p>  
          </div>
          <div class="flex flex-col items-center my-10">
            <img width="200" src="src/images/student_man.png" />
            <h3 class="text-red-500">Actividad 3</h3>
            <p class="w-1/2">Primera Actividad de la empresa, algo que la empresa haga como actividad no muy comun</p>  
          </div>
        </div>
        
        <div class="flex my-10">
          <a href="#" class="bg-red-500 p-4 rounded-full text-white capitalize font-bold">aprender mas</a>
        </div>

      </main>
        
        `;
    }
}
customElements.define('servicios-element', ServicesELement);
