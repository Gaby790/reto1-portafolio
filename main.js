document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar un elemento del DOM
    const button = document.querySelector('#myButton');

    // Agregar un evento click al botón
    button.addEventListener('click', () => {
        alert('¡Botón clickeado!');
    });

    console.log("Document loaded and button event attached");
});
