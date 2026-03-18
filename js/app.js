/* const imagen= document.getElementById("img");
imagen.addEventListener("click", (e)=>{
    e.preventDefault();
    const imgContenedor= document.getElementById("img-contenedor");
    const imgGrande= document.createElement("img");
    imgGrande.setAttribute("src", "Assets/D.png");
    imgGrande.setAttribute("width", "400px");
    imgGrande.setAttribute("height", "600px"); 
    imgContenedor.appendChild(imgGrande);

});
 */

import { Manager } from "./manager";
import { UI } from "./UI";

const manager= new Manager();
const ui= new UI(manager);