import { Operacion } from "./operacion.js";

export class Manager{
    constructor(){
        this.operaciones = [];
        this.nextId = 1;
    }
    resolver(primerValor, operador, segundoValor){
        const operacion= new Operacion(this.nextId++,primerValor,operador, segundoValor);
        
       operacion.operar(); 
       
        this.operaciones.push(operacion);
    }
    eliminar(id){
        this.operaciones= this.operaciones.filter((t)=> t.id!==id);
    }
}