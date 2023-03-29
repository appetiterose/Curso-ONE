import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js'

const cliente = new Cliente('Leonardo','1234560','789456');
const cliente2 = new Cliente('Maria','6543210','780000');

const cuentaDeLeonardo = new CuentaCorriente(cliente,'1','001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);

console.log(CuentaCorriente.cantidadCuentas);
new CuentaCorriente(cliente2,'2','002');
new CuentaCorriente(cliente2,'2','002');
new CuentaCorriente(cliente2,'2','002');
console.log(CuentaCorriente.cantidadCuentas);