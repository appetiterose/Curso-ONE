const ciudadesDisponibles = new Array('Bogotá','Lima','Santiago','Montevideo');
const ciudadDestino = 'Santiago';

let valorPasaje = 0;

console.log(`Verificando pasaje para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1)
{
    //condicion con If
    /*
    if (ciudadDestino == 'Bogotá'){
        valorPasaje = 500;
    }else if (ciudadDestino == 'Lima'){
        valorPasaje = 400;
    }else if (ciudadDestino == 'Santiago'){
        valorPasaje = 380;
    }else if (ciudadDestino == 'Montevideo'){
        valorPasaje = 200;
    }*/
    switch(ciudadDestino){
        case 'Bogotá':
            valorPasaje = 500;
            break;
        case 'Lima':
            valorPasaje = 400;
            break;
        case 'Santiago':
            valorPasaje = 380;
            break;
        case 'Montevideo':
            valorPasaje = 200;
            break;
        default:
            valorPasaje = 0;
            break;
    }
    console.log(`El valor del pasaje es: ${valorPasaje}`);
}else{
    console.log('Ciudad no disponible para viajar');
}