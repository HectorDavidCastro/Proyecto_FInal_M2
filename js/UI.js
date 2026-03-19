export class UI{
    constructor(manager){
        this.manager = manager
        this.primerValor = document.getElementById("primerValor");
        this.operador = document.getElementById("operador");
        this.segundoValor = document.getElementById("segundoValor");
        this.btnresolver = document.getElementById("resolver");
        this.historial = document.getElementById("historial");

        this.btnresolver.addEventListener("click", () => this.handleResolver());
        this.btnresolver.addEventListener("click", () => this.limpiarFormulario());
    }

    handleResolver(){
        const primerValor= parseInt(this.primerValor.value);
        const operador= this.operador.value;
        const segundoValor= parseInt(this.segundoValor.value);
        
        if(operador==="/" && segundoValor===0){
            alert("No se puede dividir entre cero")
            return;
        }
        if(!primerValor || !operador || !segundoValor){
            alert("Rellena todos los campos")
            return;
        }

        this.manager.resolver(primerValor, operador, segundoValor);
        this.render();
    }
    render(){
        this.historial.innerHTML = "";
        this.manager.operaciones.forEach(o => {
            const item = document.createElement("li");
            item.className="list-group-item d-flex align-items-center justify-content-around fs-3"

            const span = document.createElement("span");
            span.textContent=`${o.primerValor} ${o.operador} ${o.segundoValor} = ${o.operar(o.primerValor, o.operador, o.segundoValor)}`

            const btnEliminar= document.createElement("button");
            btnEliminar.setAttribute("title", "Eliminar del historial")
            btnEliminar.className="btn-close";
            
            btnEliminar.addEventListener("click",()=>{
                this.manager.eliminar(o.id);
                this.render();
            })

            item.append(span, btnEliminar);
            this.historial.appendChild(item);
        });
    }
    limpiarFormulario(){
        this.primerValor.value=""
        this.operador.value=""
        this.segundoValor.value=""
    }
}