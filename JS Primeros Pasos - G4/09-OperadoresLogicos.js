//Operadores de comparación
const ciudadDestino = 'Santiago';
const ciudadesDisponibles = new Array('Bogotá','Lima','Santiago','Montevideo');

//Palabra reservada if. Evalua una condición
console.log(`Verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
    console.log('Pasaje disponible para venta');
}else{
    console.log('Ciudad no disponible para viajar');
}

const valorPasaje = '1000';

if (valorPasaje === '1000'){//Se compara estrictamente, el tipo de dato debe ser igual
    console.log('El pasaje vale 1000');
}

//Operadores lógicos AND(&&), OR(||), NOT(!=)
const edadPasajero = 17;
const estaAcompanado = false;
console.log(`Verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0 && (edadPasajero >= 18 || estaAcompanado)){
    console.log('Pasaje disponible para venta');
}else{
    console.log('Ciudad no disponible para viajar o pasajero no cumple las reglas');
}
