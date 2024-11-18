let currentSlide = 0; // Índice de la imagen actual
const slides = document.querySelectorAll('.slide'); // Todas las imágenes del slider
const totalSlides = slides.length;  // Total de imágenes en el slider
const slider = document.querySelector('.slider');  // Contenedor de las imágenes

// Función para mostrar la siguiente imagen
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

// Función para mostrar la imagen anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Actualizar el slider para mostrar la imagen correcta
function updateSlider() {
    const offset = -currentSlide * 100; // Desplazamos las imágenes por su ancho
    slider.style.transform = `translateX(${offset}%)`; // Aplica la traducción
}

// Configurar el cambio automático de imagen cada 6 segundos
setInterval(nextSlide, 6000); // Cambiar cada 6 segundos

// Agregar eventos para los botones manuales
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Iniciar con la primera imagen
updateSlider();
