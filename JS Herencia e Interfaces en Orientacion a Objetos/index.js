/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente,'11110'));
//const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez', '12345',10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado,'12345'));

const gerente = new Gerente('Pedro Rivas','98765',12000);
gerente.asignarClave('6789');
console.log(SistemaAutenticacion.login(gerente,'6789'));

const director = new Director('Elena Moreno','45678',15000);