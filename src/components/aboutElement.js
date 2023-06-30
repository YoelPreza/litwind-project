import { LitElement, html, css } from 'lit';
import {TWStyles} from '../twlit'
export class AboutELement extends LitElement {
    static styles = [TWStyles,
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
            <main class="w-full  min-h-screen bg-white-200">
                <div class="flex flex-col md:flex-row items-center h-max">
                    <p class="text-pink-700 text-center text-4xl w-1/2 p-10"><span class="text-4xl">"</span>Nuestro trabajo sólo tiene sentido si es un testimonio fiel de su tiempo."</p>
                    <img class="h-full w-1/2 mx-auto" src="src/images/shop-girl.png" />
                </div>
                <div class="flex items-center min-h-screen w-full flex-col-reverse md:flex-row bg-pink-700">
                    <div class="
                        relative  h-screen flex-col 
                        md:w-1/2
                        py-5
                        m-5
                        
                    ">
                        <img class="h-[250px] rounded-full mx-auto md:absolute left-0 top-0"  src="src/images/shop-girl.png" />
                        <img class="h-48 rounded-full mx-auto absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2" src="src/images/shop-girl.png" />
                        <img class="h-[250px] rounded-full mx-auto absolute right-0 bottom-0" src="src/images/shop-girl.png" />
                    </div>
                    <div class="w-1/2 px-10 text-center ">
                        <h3 class="text-5xl text-center uppercase text-yellow-200 font-serif my-5">The team</h1>
                        <p class="text-yellow-200 text-center  text-2xl mx-auto   md:w-full">Nuestro trabajo sólo tiene sentido si es un testimonio fiel de su tiempo."</p><br>
                    </div>
                </div>
            </main>
        `;
    }
}
customElements.define('acerca-element', AboutELement);
