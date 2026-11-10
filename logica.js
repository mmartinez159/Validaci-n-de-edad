let formulario = document.getElementById('formulario');
let resultado = document.getElementById('resultado');

formulario.addEventListener('submit', function(event) { //Dice a js que haga todo en adelante cuando cuando se envie la info
    event.preventDefault(); /*Evita que se recargue*/

let edad= Number(document.getElementById('edad').value);


if (edad === 0){

    alert("Ingresa tu edad porfis");
    return;
}

if (edad>=18){

    resultado.textContent = "Eres mayor de edad, que bueno por ti";
    resultado.style.color = "green";
} else if(edad<18) {

    resultado.textContent = "Eres menor de edad, y ya";
    resultado.style.color = "red";

}


});
