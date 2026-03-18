export class UI{
    constructor(manager){
        this.manager = manager
        this.primerValor = document.getElementById("primerValor");
        this.operador = document.getElementById("operador");
        this.segundoValor = document.getElementById("segundoValor");
        this.btnresolver = document.getElementById("resolver");
        this.historial = document.getElementById("historial");
    }

    handleResolver(){
        const primerValor= this.primerValor.value;
        const operador= this.operador.value;
        const segundoValor= this.segundoValor.value;

        this.manager.resolver(primerValor, operador, segundoValor);
    }
    render(){
        this.manager.operaciones.forEach(o => {
            const item = document.createElement("li");
            item.className="list-group-item d-flex align-items-center"

            const span = document.createElement("span");
            span.textContent=`${o.primerValor} ${o.operador} ${o.segundoValor} = `

            const btnEliminar= document.createElement("button");
            btnEliminar.className="btn-close";
            
            btnEliminar.addEventListener("click",()=>{
                this.manager.eliminar(o.id);
                this.render();
            })

            item.append(span, btnEliminar);
            this.historial.appendChild(item);
        });
    }
}