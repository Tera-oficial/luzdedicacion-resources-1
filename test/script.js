// Función para cargar los datos en la carta
function cargarCarta(data) {
    document.getElementById('tituloCarta').textContent = data.titulo;
    document.getElementById('imagenCarta').src = data.rutaImagen;
    document.getElementById('tipoCarta').textContent = data.tipo;
    document.getElementById('personaCarta').textContent = data.persona;
    document.getElementById('categoriaCarta').textContent = data.categoria;
    document.getElementById('creadorCarta').textContent = data.creador;
}

// Cargar la carta al iniciar
window.addEventListener('DOMContentLoaded', () => {
    console.log('CVT lista para recibir datos externos');
});

// Ejemplo: cambiar carta desde fuera llamando a cambiarCarta(data)
