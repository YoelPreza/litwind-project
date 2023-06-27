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
            <main class="w-full border border-red-500 min-h-screen bg-yellow-200">
                <div class="flex flex-col md:flex-row items-center h-maxcx">
                    <p class="text-red-500 text-center text-4xl w-1/2 p-10"><span class="text-4xl">"</span>Nuestro trabajo sólo tiene sentido si es un testimonio fiel de su tiempo."</p>
                    <img class="h-full w-auto mx-auto" src="src/images/shop-girl.png" />
                </div>
                <div class="flex items-center h-screen flex-col md:flex-row">
                    <div class="w-1/2 h-96 relative flex-col py-10">
                        <img class="h-32 mx-auto absolute " src="src/images/shop-girl.png" />
                        <img class="h-36 mx-auto absolute left-28 top-28" src="src/images/shop-girl.png" />
                    </div>
                    <div class="w-1/2 py-10 text-center">
                        <h3 class="text-5xl text-center uppercase font-serif my-5">The team</h1>
                        <p class="text-red-500 text-center text-2xl mx-auto w-1/2 md:w-full">Nuestro trabajo sólo tiene sentido si es un testimonio fiel de su tiempo."</p><br>
                        <p class="text-red-500 text-center text-2xl mx-auto w-1/2 md:w-full">Nuestro trabajo sólo tiene sentido si es un testimonio fiel de su tiempo."</p>
                    </div>
                </div>
            </main>
        `;
    }
}
customElements.define('about-element', AboutELement);
