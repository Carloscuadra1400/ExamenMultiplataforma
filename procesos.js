const fs = require('fs');
const btnGuardar = document.getElementById('guardar');
const txtIdentidad = document.getElementById('identidad');
const txtNombre = document.getElementById('nombre');
const txtcorreo = document.getElementById('correo');
const txttelefono = document.getElementById('telefono');
const Txtanio= document.getElementById('anio');
const Txtmes= document.getElementById('mes');
const Txtdia= document.getElementById('dia');
const txtnacimiento = Txtanio.value +"-"+Txtdia.value+"-"+Txtdia.value

btnGuardar.addEventListener('click', function(e) {   
    e.preventDefault();

    console.log('Mostrando mensajes en la consola');
    const data = `${txtIdentidad.value},\n${txtNombre.value}, \n${txtcorreo.value},\n${txttelefono.value},\n${txtnacimiento.value}`;  

    fs.writeFile('./txtidentidad.text', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });  
    }
        
);
