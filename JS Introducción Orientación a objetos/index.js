class cliente{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class cuentaCorriente{
    numero;
    saldo;
    agencia;

    depositoEnCuenta(valor){
        this.saldo += valor;
    }
}

const cliente1 = new cliente();
cliente1.nombreCliente = "José";
cliente1.dniCliente = "12321";
cliente1.rutCliente = "D19123";
const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.numero = "232323";
cuentaCorriente1.saldo = 2000;
cuentaCorriente1.agencia = 1001;

const cliente2 = new cliente();
cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "13804050";
cliente2.rutCliente = "P12341";
const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numero = "123434343";
cuentaCorriente2.saldo = 1000;
cuentaCorriente2.agencia = 1001;

console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(100);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(200);
console.log(cuentaCorriente2.saldo);
cuentaCorriente2.depositoEnCuenta(500);
console.log(cuentaCorriente2.saldo);