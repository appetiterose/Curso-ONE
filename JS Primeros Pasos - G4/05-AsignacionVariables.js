//Oakabra const. Espacio de memoria que luego de asignar su valor no cambia en el tiempo

const valorPasaje = 2345;

console.log(valorPasaje);

const nombrePasajero = 'Leonardo';
const apellidoPasajero = 'Lacruz';

console.log(nombrePasajero);
console.log(apellidoPasajero);



//Palabra var. Espacio de memoria que puede cambiar durante la ejecición del programa. El alcance
var nombreCompletoDelPasajero = nombrePasajero + ' ' + apellidoPasajero;

//Bloque
{
    //Palabra let. Espacio de memoria que pueda cambiar durante la ejecución del programa

    let nombreCompletoPasajero = nombrePasajero + ' ' + apellidoPasajero;
    console.log('Variable con let: ' + nombreCompletoPasajero);
    console.log('Variable con var: ' + nombreCompletoDelPasajero);
}