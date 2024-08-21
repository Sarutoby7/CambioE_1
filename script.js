var botonCambiarColor = document.getElementById('cambiarColor');
var campoColorFondo = document.getElementById('colorFondo');

botonCambiarColor.addEventListener('click', function() {
    var color = campoColorFondo.value;
    document.body.style.backgroundColor = color;
});
