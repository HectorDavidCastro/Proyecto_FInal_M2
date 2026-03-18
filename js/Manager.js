import { Operacion } from "./operacion";

export class Manager{
    constructor(){
        this.operaciones = [];
        this.nextId = 1;
    }
  /*    agregar(primerValor, operador, segundoValor){
        const operacion= new Operacion(this.nextId++,primerValor,operador, segundoValor);
        this.operaciones.push(operacion);
    } */
    resolver(primerValor, operador, segundoValor){
        const operacion= new Operacion(this.nextId++,primerValor,operador, segundoValor);
        this.operaciones.push(operacion);


        if(operador==="suma"){
            const resultado = primerValor+segundoValor
            return resultado
        }
        if(operador==="resta"){
            const resultado= primerValor-segundoValor
            return resultado
        }
        if(operador==="multiplicacion"){
            const resultado= primerValor* segundoValor
            return resultado
        }
        if(operador==="division"){
            const resultado = primerValor/segundoValor
            return resultado
        }
    }
    eliminar(id){
        this.operaciones= this.operaciones.filter((t)=> t.id!==id);
    }
}