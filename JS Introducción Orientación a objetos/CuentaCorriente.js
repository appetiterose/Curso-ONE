import { Cliente } from "./Cliente.js";

export class CuentaCorriente{
    #cliente;
    numero;
    agencia;
    #saldo; //Si coloco # la variable se toma como privada y no se puede modificar
    static cantidadCuentas = 0; //Este atributo es común para todas las cuentas

    set cliente(valor){
        if(valor instanceof Cliente)//
            this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(cliente, numero, agencia){
        this.cliente = cliente;
        //this.#cliente = null; //Es recomendado no dejar variables Undefined, usar null
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        CuentaCorriente.cantidadCuentas++; //Siempre accedemos con el nombre de la clase y .
    }

    depositoEnCuenta(valor){
        if(valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }
    retirarDeCuenta(valor){
        if(valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
    }
}
