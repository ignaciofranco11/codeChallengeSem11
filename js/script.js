let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let fecha = document.getElementById("fecha");
let boton = document.getElementById("botonIngresar");


boton.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/users', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            nombre: nombre.value,
            apellido: apellido.value,
            fecha: fecha.value
        })
    })
        .then(response => response.json())
        .then(
            alert("Datos enviados")

        );



    nombre.value = "";
    apellido.value = "";
    fecha.value = "";
});