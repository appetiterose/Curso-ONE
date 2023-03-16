const ciudad1 = 'México';
const ciudad2 = 'Aguascalientes';
const ciudad3 = 'Queretaro';

//Definición de una lista con tipo de dato alfanúmerico
const ciudadesDisponibles = new Array('México','Aguascalientes','Queretaro');
console.log(ciudadesDisponibles);

//Definición de un lista de forma abreviada
const paisesDisponibles = ['México','Colombia','Argentina','España','Brasil'];
console.log(paisesDisponibles)


paisesDisponibles.push('Uruguay');
ciudadesDisponibles.push('Monterrey');


paisesDisponibles.unshift('Ecuador');
ciudadesDisponibles.unshift('Quito');

//Mostrando el primer elemento de la lista
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[0]);

paisesDisponibles.splice(1,2,'USA','Canada'); //Agrega 2 elementos apartir de la posición 1
console.log(paisesDisponibles);