import { LitElement, html, css } from 'lit';
import {TWStyles} from '../twlit'

export class NavELement extends LitElement {
    static styles = [ TWStyles,
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            brandName: { type: String },
            links: { type: Array }
        };
    }

    constructor(){
        super();
        this.brandName = "My Brand";
        this.links = [
            { name:'Inicio', src:'#' },
            { name:'Acerca de', src:'#' },
            { name:'Servicios', src:'#' },
            { name:'Productos', src:'#' },
            { name:'Contacto', src:'#' },
        ]
    }

    toggleMEnu(e){
        this.shadowRoot.querySelector('.links').classList.toggle('-translate-x-full')
    }

    render() {
        return html`
            <nav class="bg-slate-800 flex justify-between items-center relative p-2 ">
                <ul>
                    <li class="text-white font-bold">${this.brandName}</li>
                </ul>
                <ul class="links absolute top-full left-0 bg-slate-600 w-full text-center -translate-x-full transition
                sm:relative sm:-translate-x-0 sm:flex-row sm:flex sm:justify-end sm:w-max sm:bg-transparent
                ">
                    ${this.links.map(link => html`<li class="p-2 text-white hover:bg-slate-500 cursor-pointer transition
                    
                    ">${link.name}</li>`)}
                </ul>

                <button @click=${this.toggleMEnu} class="text-white border p-2 
                sm:hidden
                ">menu</button>
            </nav>
        `;
    }
}
customElements.define('nav-element', NavELement);
