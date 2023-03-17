const datos = [
    {
        'ciudad' : 'Bogotá',
        'precio' : 500
    },
    {
        'ciudad' : 'Lima',
        'precio' : 400
    },
    {
        'ciudad' : 'Santiago',
        'precio' : 380
    },
    {
        'ciudad' : 'Montevideo',
        'precio' : 200
    },
];

const presupuestoDisponible = 400;

let i = 0;
//While... 0 o más veces
//Do... 1 o más veces
/*while(i < datos.length && datos[i].precio > presupuestoDisponible){//Primero verifico que no llego al final de la lista y despues verifico el precio
    i++;
}*/

//For... valor inicial par un valor final 
let ciudadSeleccionada = '' ;
for (let i= 0; i < datos.length && ciudadSeleccionada == ''; i++) {

    if(datos[i].precio <= presupuestoDisponible){
        ciudadSeleccionada = datos[i].ciudad;
        
    }
}

if(ciudadSeleccionada == ''){
    console.log('No tenemos pasajes disponibles');
}else
    console.log('Puedes comprar pasaje para: ' + ciudadSeleccionada);

