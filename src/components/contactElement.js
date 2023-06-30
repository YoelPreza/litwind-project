import { LitElement, html, css } from 'lit';
import {TWStyles} from '../twlit'

export class ContactELement extends LitElement {
    static styles = [TWStyles,
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        
            <form class="bg-blue-300 flex flex-col mx-auto justify-center p-5 h-screen" 
                action="https://formspree.io/f/mleyranl"
                method="POST"
            >
    
                <div class="container w-11/12 mx-auto">
                    <h2 class="uppercase text-center text-2xl font-bolder">
                        contact 
                        <span class="text-pink-500">me</span>
                    </h2>
                    
                    <div class="flex flex-col sm:flex-row w-full justify-between m-2 p-2">
                        <input class="rounded-xl ring ring-pink-500  outline-none  m-3 p-2 sm:w-1/2" type="text" name="" id="" placeholder="Name">
                        <input class="rounded-xl ring ring-pink-500 outline-none m-3 p-2 sm:w-1/2" type="text" name="" id="" placeholder="Subjet">
                    </div>
                    
                    <div class="flex justify-center w-full m-2 p-2">
                        <textarea class="rounded-xl w-full max-h-96 h-40 min-h-40 ring ring-pink-500 outline-none p-2 mx-3" name="" id="" rows="auto" placeholder="Write your message"></textarea>
                    </div>
                    
                    <button class="bg-pink-500 text-white rounded-xl px-10 capitalize py-2 mx-7">enviar</button>
                </div>
        
            </form>`;
    }
}
customElements.define('contacto-element', ContactELement);
