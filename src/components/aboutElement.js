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
            <main id="about" class="w-full border border-red-500 min-h-screen bg-yellow-200">
                <div class="flex flex-col  md:flex-row items-center h-max">
            <main class="w-full border border-red-500 min-h-screen bg-yellow-200">
                <div class="flex flex-col md:flex-row items-center h-maxcx">
                    <p class="text-red-500 text-center text-4xl w-1/2 p-10"><span class="text-4xl">"</span>Nuestro trabajo sólo tiene sentido si es un testimonio fiel de su tiempo."</p>
                    <img class="h-full w-full mx-auto" src="src/images/shop-girl.png" />
                </div>
                <div class="flex items-center min-h-screen flex-col-reverse md:flex-row">
                    <div class="
                        relative w-full h-96 flex-col border
                        sm:w-96
                    ">
                        <img class="h-36 mx-auto absolute" src="src/images/shop-girl.png" />
                        <img class="h-36 mx-auto absolute left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2" src="src/images/shop-girl.png" />
                        <img class="h-36 mx-auto absolute right-0 bottom-0" src="src/images/shop-girl.png" />
                    </div>
                    <div class="w-full py-10 text-center">
                        <h3 class="text-5xl text-center uppercase font-serif my-5">The team</h1>
                        <p class="text-red-500 text-center text-2xl mx-auto w-1/2 md:w-full">Nuestro trabajo sólo tiene sentido si es un testimonio fiel de su tiempo."</p><br>
                        <p class="text-red-500 text-center text-2xl mx-auto w-1/2 md:w-full">Nuestro trabajo sólo tiene sentido si es un testimonio fiel de su tiempo."</p>
                    </div>
                </div>
            </main>
        `;
    }
}
customElements.define('acerca-element', AboutELement);
