export class UI{
    constructor(manager){
        this.manager = manager
        this.primerValor = document.getElementById("primerValor");
        this.operador = document.getElementById("operador");
        this.segundoValor = document.getElementById("segundoValor");
        this.btnresolver = document.getElementById("resolver");
        this.historial = document.getElementById("historial");
        this.imgGrandeContenedor= document.getElementById("imgGrandeContenedor");


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


        if(primerValor==="" || operador==="" || segundoValor===""){
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

    renderImagen(){
        const btnImg1= document.getElementById("btnimg1");
        const btnImg2= document.getElementById("btnimg2");
        const btnImg3= document.getElementById("btnimg3");
        const btnImg4= document.getElementById("btnimg4");
        const btnImg5= document.getElementById("btnimg5");
        const btnImg6= document.getElementById("btnimg6");
        const btnImg7= document.getElementById("btnimg7");
        const btnImg8= document.getElementById("btnimg8");
        const btnImg9= document.getElementById("btnimg9");

        btnImg1.addEventListener("click",(e)=>{
            e.preventDefault();
            this.imgGrandeContenedor.innerHTML="";
            const imgGrande= document.createElement("img");
            imgGrande.className="img-fluid img-thumbnail"
            imgGrande.setAttribute("src", "./Assets/img1.png");
            this.imgGrandeContenedor.appendChild(imgGrande);
        });
        btnImg2.addEventListener("click",(e)=>{
            e.preventDefault();
            this.imgGrandeContenedor.innerHTML="";
            const imgGrande= document.createElement("img");
            imgGrande.className="img-fluid img-thumbnail"
            imgGrande.setAttribute("src", "./Assets/img2.png");
            this.imgGrandeContenedor.appendChild(imgGrande);
        });
        btnImg3.addEventListener("click",(e)=>{
            e.preventDefault();
            this.imgGrandeContenedor.innerHTML="";
            const imgGrande= document.createElement("img");
            imgGrande.className="img-fluid img-thumbnail"
            imgGrande.setAttribute("src", "./Assets/img3.png");
            this.imgGrandeContenedor.appendChild(imgGrande);
        });
        btnImg4.addEventListener("click",(e)=>{
            e.preventDefault();
            this.imgGrandeContenedor.innerHTML="";
            const imgGrande= document.createElement("img");
            imgGrande.className="img-fluid img-thumbnail"
            imgGrande.setAttribute("src", "./Assets/img4.png");
            this.imgGrandeContenedor.appendChild(imgGrande);
        });
        btnImg5.addEventListener("click",(e)=>{
            e.preventDefault();
            this.imgGrandeContenedor.innerHTML="";
            const imgGrande= document.createElement("img");
            imgGrande.className="img-fluid img-thumbnail"
            imgGrande.setAttribute("src", "./Assets/img5.png");
            this.imgGrandeContenedor.appendChild(imgGrande);
        });
        btnImg6.addEventListener("click",(e)=>{
            e.preventDefault();
            this.imgGrandeContenedor.innerHTML="";
            const imgGrande= document.createElement("img");
            imgGrande.className="img-fluid img-thumbnail"
            imgGrande.setAttribute("src", "./Assets/img6.png");
            this.imgGrandeContenedor.appendChild(imgGrande);
        });
        btnImg7.addEventListener("click",(e)=>{
            e.preventDefault();
            this.imgGrandeContenedor.innerHTML="";
            const imgGrande= document.createElement("img");
            imgGrande.className="img-fluid img-thumbnail"
            imgGrande.setAttribute("src", "./Assets/img7.png");
            this.imgGrandeContenedor.appendChild(imgGrande);
        });
        btnImg8.addEventListener("click",(e)=>{
            e.preventDefault();
            this.imgGrandeContenedor.innerHTML="";
            const imgGrande= document.createElement("img");
            imgGrande.className="img-fluid img-thumbnail"
            imgGrande.setAttribute("src", "./Assets/img8.png");
            this.imgGrandeContenedor.appendChild(imgGrande);
        });
        btnImg9.addEventListener("click",(e)=>{
            e.preventDefault();
            this.imgGrandeContenedor.innerHTML="";
            const imgGrande= document.createElement("img");
            imgGrande.className="img-fluid img-thumbnail"
            imgGrande.setAttribute("src", "./Assets/img9.png");
            this.imgGrandeContenedor.appendChild(imgGrande);
        });

    }
}