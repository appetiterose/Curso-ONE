const ciudadesDisponibles = new Array('Bogotá','Lima','Santiago','Montevideo');
const paisesDisponibles = ['Colombia','Peru','Chile','Brasil','Argentina','Uruguay','Venezuela'];

const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

//remover el primer elemento
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//Remover el ultimo elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//Filtro de elementos de la lista
const paisesFiltrados = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados);

//Unificar los elementos de una cadena de caracteres
console.log(paisesDisponibles.join('_'));

//Ordenar la lista
console.log(paisesDisponibles.sort()); //Ojo, se modifica

//Conociendo la posición
console.log(`Peru está en la posición: ${paisesDisponibles.indexOf('Peru')}`);

//Unificar dos listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles); //Con concat no se modifica
console.log(listaPaisesYCiudades);