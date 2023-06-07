//Calculo de entradas
//defino valor de ticket
const valorTicket = 200;

//defino los porcentajes
let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

//tomo los campos
const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoriaSelect');
const botonCalcular = document.querySelector('#calcular');
const botonReset = document.querySelector('#reset');
const parrafo = document.querySelector('#parrafo');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#femail');

function totalPagar() {
    //calculo valor total
    let totalValor = parseInt(cantidad.value) * valorTicket;

    //condicionar por descuento
    if (categoria.value == 1) {
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }
    else if (categoria.value == 2) {
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if (categoria.value == 3) {
        totalValor = totalValor - (totalValor * descuentoJunior);
    }
    else if (categoria.value == 0) {
        totalValor = totalValor - totalValor;
    }
        parrafo.innerHTML = `Total a pagar : $ ${totalValor}`;
    }

    botonCalcular.addEventListener('click', totalPagar);


    function validarFormulario(evento) {
        evento.preventDefault(); //evita el envio del formulario por defecto
        var nombre = document.getElementById('nombre').value;
        if (nombre.length == 0) {
            alert('No has escrito nada en el Nombre');
            return;
        }
        var apellido = document.getElementById('apellido').value;
        if (apellido.length == 0) {
            alert('No has escrito nada en el Apellido');
            return;
        }
        var femail = document.getElementById('femail').value;
        if (femail.length == 0) {
            alert('No has escrito nada en el email');
            return;
        }
        var cantidad = document.getElementById('cantidad').value;
        if (cantidad == '0' || isNaN(cantidad) || cantidad.length == 0) {
            alert('No has puesto la cantidad de entradas o el valor ingresado no es un número');
            return;
        }

        var categoria = document.getElementById('categoriaSelect').value;
        if (categoria === "") {
            alert('No has seleccionado una categoria');
            return;
        }

        //alert("Muchas gracias por enviar el formulario. Nos contactaremos a la brevedad.")
        //this.submit();
    }

    //Cuando apretamos submit se manda el formulario
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("formulario").addEventListener('submit', validarFormulario);
    });

    botonReset.addEventListener('click', () => {
        parrafo.innerHTML = 'Total a pagar : 0'
        cantidad.value = 0;
        categoria.value = "0"; 
        nombre.value = "";
        apellido.value = "";
        email.value = ""; 

    })