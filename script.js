document.getElementById('mensaje').addEventListener('input', function() {
    var textarea = document.getElementById('mensaje');
    // Expresión regular para permitir solo letras minúsculas y espacios
    textarea.value = textarea.value.replace(/[^a-z\s]/g, '');
});

document.getElementById('encriptar').addEventListener('click', function() {
    var mensaje = document.getElementById('mensaje').value;
    var mensajeEncriptado = encriptar(mensaje);
    var resultado = document.getElementById('mensaje-resultado');
    resultado.value = mensajeEncriptado;
    resultado.classList.add('active'); // Añade la clase para mostrar el texto
    document.getElementById('mensaje').value = ''; // Limpia el textarea
});

document.getElementById('desencriptar').addEventListener('click', function() {
    var mensaje = document.getElementById('mensaje').value;
    var mensajeDesencriptado = desencriptar(mensaje);
    var resultado = document.getElementById('mensaje-resultado');
    resultado.value = mensajeDesencriptado;
    resultado.classList.add('active'); // Añade la clase para mostrar el texto
    document.getElementById('mensaje').value = ''; // Limpia el textarea
});

document.getElementById('copiar').addEventListener('click', function() {
    var mensajeResultado = document.getElementById('mensaje-resultado');
    mensajeResultado.select();
    mensajeResultado.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand('copy');

    // Vaciar el textarea de resultados después de copiar
    mensajeResultado.value = '';
    mensajeResultado.classList.remove('active'); // Remueve la clase para mostrar la imagen y el texto

    // Notificar al usuario que el texto ha sido copiado
    alert('Texto copiado al portapapeles');
});

// Función para encriptar el mensaje
function encriptar(texto) {
    var resultado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return resultado;
}

// Función para desencriptar el mensaje
function desencriptar(texto) {
    var resultado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return resultado;
}
