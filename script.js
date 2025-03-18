
//// barra de navegacio

const navbar = document.getElementById("container-navbar");
const estiloOriginal = {backgroundColor : navbar.style.backgroundColor} 
const navSecciones = document.querySelectorAll(".nav-secciones");
// Función para detectar la sección en el viewport
function detectarMovimiento() {
  if (navbar) {
    navbar.style.backgroundColor = "rgba(248, 245, 245, 0)";
    navSecciones.forEach((seccion) =>{
         seccion.style.color = "rgba(248, 245, 245, 0.12)";
    });
    }
    setTimeout(reestablecerColor, 5000);  
}
//funcion reestablecer estilos originales
function reestablecerColor(){
   navbar.style.backgroundColor = estiloOriginal.backgroundColor;
   navSecciones.forEach((seccion) =>{
       seccion.style.color = "rgba(14, 13, 13,1)";
   });  
}
// Llamar a la función cuando se haga scroll
window.addEventListener('scroll', detectarMovimiento);


///seccion competencias
//competencias insertar imagenes
const imgTecnologia = document.getElementById('img-tec');
const conTextosTecnologia = document.getElementById('con-texto-competencia');
const textosActuales = document.querySelectorAll('.texto-habilidad');
//funcion para insertar imagen tecnologia
function insertarimagen(direccion,textosActuales){
  imgTecnologia.src = direccion;

  conTextosTecnologia.innerHTML = textosActuales;
}

 document.getElementById('java').addEventListener('mousemove', function(){
     const direccion = 'Pictures/java.png';
     const textosDescripcion = `
        <p class="texto-habilidad">Encapsulamiento, herencia y polimorfismo para escribir código limpio y modular.</p>
        <p class="texto-habilidad">Uso eficiente de listas, mapas y conjuntos.</p>
        <p class="texto-habilidad">Implementación de manejo de errores con excepciones personalizadas.</p>
         `;
    insertarimagen(direccion,textosDescripcion);
 });
 document.getElementById('sprintboot').addEventListener('mousemove', function(){
  const direccion = 'Pictures/boot_spring.png';
  
  const textosDescripcion = `
    <p class="texto-habilidad">Creación de aplicaciones robustas y escalables con una estructura modular y siguiendo buenas prácticas.</p>
    <p class="texto-habilidad">Uso de anotaciones como @Component, @Service y @Repository para gestionar beans.</p>
    <p class="texto-habilidad">Implementación de APIs RESTful con @RestController, manejo de peticiones con @GetMapping, @PostMapping.</p>
        `;
   insertarimagen(direccion,textosDescripcion);
});
document.getElementById('github').addEventListener('mousemove', function(){
  const direccion = 'Pictures/github.png';
  const textosDescripcion = `
  <p class="texto-habilidad">Uso de comandos para gestionar el código de manera eficiente.</p>
  <p class="texto-habilidad">Manejo de repositorios remotos, pull requests y revisión de código en equipo mediante ramas.</p>
  <p class="texto-habilidad">Identificación y solución de conflictos en merges y mantenimiento de un historial limpio.</p>
      `;
 insertarimagen(direccion,textosDescripcion);
});
document.getElementById('sql').addEventListener('mousemove', function(){
const direccion = 'Pictures/mysql.png';
const textosDescripcion = `
<p class="texto-habilidad">Creación de estructuras eficientes con tablas normalizadas, relaciones y claves primarias/foráneas.</p>
<p class="texto-habilidad">Subconsultas y funciones agregadas para extraer y manipular datos de manera efectiva.</p>
<p class="texto-habilidad">Creación de SP, triggers y vistas para automatizar procesos y optimización de consultas.</p>
    `;
insertarimagen(direccion,textosDescripcion);
});
document.getElementById('js').addEventListener('mousemove', function(){
  const direccion = 'Pictures/javascript.png';
  const textosDescripcion = `
  <p class="texto-habilidad">Uso de DOM para modificar dinámicamente el contenido de la página.</p>
  <p class="texto-habilidad">Manejo de eventos con addEventListener, delegación de eventos y control de interacciones del usuario.</p>
  <p class="texto-habilidad">Modificación de CSS con style, clases dinámicas con classList y animaciones con requestAnimationFrame.</p>
      `;
 insertarimagen(direccion,textosDescripcion);
});
document.getElementById('css').addEventListener('mousemove', function(){
  const direccion = 'Pictures/css.png';
  const textosDescripcion = `
  <p class="texto-habilidad">Maquetación y diseño responsivo, uso de Flexbox y Grid para crear diseños adaptables y bien estructurados en cualquier dispositivo.</p>
  <p class="texto-habilidad">Aplicación de animaciones con @keyframes, transiciones suaves y efectos visuales modernos con box-shadow y filter.</p>
  <
      `;
 insertarimagen(direccion,textosDescripcion);
});
document.getElementById('html').addEventListener('mousemove', function(){
const direccion = 'Pictures/html.png';
const textosDescripcion = `
<p class="texto-habilidad">Uso de etiquetas como header, section, article y footer para mejorar la accesibilidad y el SEO.</p>
<p class="texto-habilidad">Creación de formularios interactivos y validaciones con atributos como required y pattern.</p>
<p class="texto-habilidad">Inserción de imágenes, videos y audios.</p>
    `;
insertarimagen(direccion,textosDescripcion);
});


////////seccion proyectos

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function updateCarousel() {
    const itemWidth = items[0].clientWidth;
    const newTransformValue = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${newTransformValue}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Inicializa el carrusel
updateCarousel();


