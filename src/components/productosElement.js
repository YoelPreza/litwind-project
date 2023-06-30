import { LitElement, html, css } from 'lit';
import {TWStyles} from '../twlit'

export class ProductosELement extends LitElement {
    static styles = [ TWStyles,
        css`
            :host {
                display: block;
            }
        `
        ]

    static get properties() {
        return {
            products: { type: Array, reflect:true},
        };
    }

    constructor(){
        super();
        this.products = [
           {
            id: 1,
            img:"https://cdn-icons-png.flaticon.com/128/5406/5406582.png",
            name: "Basic",
            description:["Navbar c/ 5 secciones", "SP", "Footer", "Actualización costo adicional"],
            price: "$2000",
            bg: "bg-pink-400",
            tx:"text-pink-700",

        },
        {
            id: 2,
            img:"https://images.wikidexcdn.net/mwuploads/wikidex/3/30/latest/20221117203319/Medalla_Dominante_Roca.png",
            name: "Business",
            description:["Navbar", "5 páginas de contenido estático", 
            "inicio, nosotros, servicio, clientes, contacto",
            "Footer",
            "Botón redes sociales",
            "Actualización  costo adicional"
            ],
            price: "$4000",
            bg: "bg-pink-300",
            tx:"text-pink-700",

        },
        {
            id: 3,
            img:"https://en.apkshki.com/storage/3071/icon_5ea8a3261887d_3071_w256.png",
            name: "Premium",
            description:["Navbar", "6 páginas de contenido estático", 
            "inicio, nosotros, servicio, clientes, contacto, mini tienda",
            "Footer",
            "Botón redes sociales",
            "Correo empresarial",
            "1 Actualización mensual sin costo dentro de los parámetros iniciales durante 6 meses"
            ],
            price: "$6000",
            bg: "bg-pink-200",
            tx:"text-pink-700",
            md:"span-2"
        },
        ]
    }

    render() {
        return html`
        <div class="bg-pink-700  h-max flex flex-wrap   justify-center">
        ${this.products.map(prod=>html`
            <div class=" ${prod.bg} max-w-[400px] mx-auto my-5 h-max text-left p-20 text-pink rounded-xl">
                <img class="w-20" src=${prod.img} alt="imagen de bronce"/> 
                <h2 class="text-5xl font-bold my-12">${prod.name}</h2>
                <ul class=" h-max">${prod.description.map(des=>html`
                    <li class="list-disc list-item text-2xl ">${des}</li>`)}
                </ul> 
                <p class=" text-4xl text-center font-bold my-12 ">${prod.price} </p> 
                <button class=" ${prod.tx} p-5 w-52 text-xl font-bold -translate-x-5 bg-yellow-200 rounded-full">Details</button>
            </div>` )}
        
        <div>
        `;
    }
}
customElements.define('productos-element', ProductosELement);
