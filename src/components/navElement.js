import { LitElement, html, css } from 'lit';
import { TWStyles } from '../twlit'

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
        this.brandName = "My Brand is dinamic";
        this.links = [
            { name:'Inicio' },
            { name:'Acerca' },
            { name:'Servicios'},
            { name:'Productos'},
            { name:'Contacto'},
        ]
    }

    toggleMEnu(e){
        this.shadowRoot.querySelector('.links').classList.toggle('-translate-x-[120%]')
    }

    scrollThis(e) {
        e.preventDefault()
        const innerText = e.target.innerText;
        this.dispatchEvent(new CustomEvent('scroll-this', { detail: innerText, bubbles:true, composed:true}))

        this.toggleMEnu()
    }

    render() {
        return html`
            <nav class="  bg-slate-800/60 rounded-lg backdrop-blur-sm fixed top-5 w-11/12 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center p-2 px-5">
                <ul>
                    <li class="text-white font-bold">${this.brandName}</li>
                </ul>
                <ul class="links absolute top-full left-0    w-full rounded-lg text-center -translate-x-[120%] transition
                sm:relative sm:-translate-x-0 sm:flex-row sm:flex sm:justify-end sm:w-max 
                ">
                    ${this.links.map(link => html`<li @click="${this.scrollThis}" class="p-2 text-white sm:bg-transparent bg-slate-800/60 hover:bg-slate-500/60 my-1 sm:my-0 rounded-lg cursor-pointer transition
                    ">${link.name}</li>`)}
                </ul>

                <button @click=${this.toggleMEnu} class="text-white rounded-lg border p-2 
                sm:hidden
                ">menu</button>
            </nav>
        `;
    }
}
customElements.define('nav-element', NavELement);
