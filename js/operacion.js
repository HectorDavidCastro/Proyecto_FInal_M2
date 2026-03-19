//id --> identificador unico para cada operación
//primerValor --> siempre de tipo number
//operador --> suma(+), resta(-), multiplicación(*), división(/)
//segundoValor --> siempre de tipo number

export class Operacion{
    constructor( id ,primerValor, operador, segundoValor){
        this.id = id;
        this.primerValor = primerValor;
        this.operador = operador;
        this.segundoValor = segundoValor;
    }
    
    operar(primerValor, operador, segundoValor){
        if(operador==="+"){
            const resultado = primerValor+segundoValor
            return resultado
        }
        if(operador==="-"){
            const resultado= primerValor-segundoValor
            return resultado
        }
        if(operador==="*"){
            const resultado= primerValor* segundoValor
            return resultado
        }
         if(operador==="/"){
            const resultado = primerValor/segundoValor
            return resultado
        }
    }
}
