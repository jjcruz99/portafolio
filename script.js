
//// barra de navegacio

const navbar = document.getElementById("container-navbar");
const estiloOriginal = {backgroundColor : navbar.style.backgroundColor} 
const navSecciones = document.querySelectorAll(".nav-secciones");
// Función para detectar la sección en el viewport
function detectarMovimiento() {
  if (navbar) {
    navbar.style.backgroundColor = "rgba(248, 245, 245, 0)";
    navSecciones.forEach((seccion) =>{
         seccion.style.color = "rgba(248, 245, 245, 0.77)";
    });
    }
    setTimeout(reestablecerColor, 3000);  
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
        <p class="texto-habilidad">Programación Orientada a Objetos : Encapsulamiento, herencia y polimorfismo para escribir código limpio y modular.</p>
        <p class="texto-habilidad">Manejo de Colecciones y Streams : Uso eficiente de listas, mapas y conjuntos.</p>
        <p class="texto-habilidad">Gestión de Excepciones y Concurrencia : Implementación de manejo de errores con excepciones personalizadas.</p>
         `;
    insertarimagen(direccion,textosDescripcion);
 });
 document.getElementById('sprintboot').addEventListener('mousemove', function(){
  const direccion = 'Pictures/boot_spring.png';
  
  const textosDescripcion = `
    <p class="texto-habilidad">Desarrollo de aplicaciones con Spring Boot : Creación de aplicaciones robustas y escalables con una estructura modular y siguiendo buenas prácticas.</p>
    <p class="texto-habilidad">Inyección de Dependencias y Configuración : Uso de anotaciones como @Component, @Service y @Repository para gestionar beans.</p>
    <p class="texto-habilidad">Manejo de Controladores y Endpoints REST : Implementación de APIs RESTful con @RestController, manejo de peticiones con @GetMapping, @PostMapping, y gestión de respuestas con ResponseEntity.</p>
        `;
   insertarimagen(direccion,textosDescripcion);
});
document.getElementById('github').addEventListener('mousemove', function(){
  const direccion = 'Pictures/github.png';
  const textosDescripcion = `
  <p class="texto-habilidad">Control de versiones con Git : Uso de comandos para gestionar el código de manera eficiente.</p>
  <p class="texto-habilidad">Colaboración en proyectos con GitHub : Manejo de repositorios remotos, pull requests y revisión de código en equipo mediante ramas.</p>
  <p class="texto-habilidad">Resolución de conflictos y buenas prácticas : Identificación y solución de conflictos en merges y mantenimiento de un historial limpio con commits significativos</p>
      `;
 insertarimagen(direccion,textosDescripcion);
});
document.getElementById('sql').addEventListener('mousemove', function(){
const direccion = 'Pictures/mysql.png';
const textosDescripcion = `
<p class="texto-habilidad">Diseño y gestión de bases de datos : Creación de estructuras eficientes con tablas normalizadas, relaciones y claves primarias/foráneas.</p>
<p class="texto-habilidad">Consultas SQL avanzadas : Uso de JOIN, GROUP BY, HAVING, subconsultas y funciones agregadas para extraer y manipular datos de manera efectiva.</p>
<p class="texto-habilidad">Procedimientos almacenados y optimización : Creación de procedimientos almacenados, triggers y vistas para automatizar procesos, junto con análisis y optimización de consultas.</p>
    `;
insertarimagen(direccion,textosDescripcion);
});
document.getElementById('js').addEventListener('mousemove', function(){
  const direccion = 'Pictures/javascript.png';
  const textosDescripcion = `
  <p class="texto-habilidad">Manipulación del DOM : Uso de document.querySelector, createElement, y appendChild para modificar dinámicamente el contenido de la página.</p>
  <p class="texto-habilidad">Eventos y Listeners : Manejo de eventos con addEventListener, delegación de eventos y control de interacciones del usuario.</p>
  <p class="texto-habilidad">Manipulación de estilos y animaciones : Modificación de CSS con style, clases dinámicas con classList y animaciones con requestAnimationFrame.</p>
      `;
 insertarimagen(direccion,textosDescripcion);
});
document.getElementById('css').addEventListener('mousemove', function(){
  const direccion = 'Pictures/css.png';
  const textosDescripcion = `
  <p class="texto-habilidad">Maquetación y diseño responsivo : Uso de Flexbox y Grid para crear diseños adaptables y bien estructurados en cualquier dispositivo.</p>
  <p class="texto-habilidad">Estilización avanzada : Aplicación de animaciones con @keyframes, transiciones suaves y efectos visuales modernos con box-shadow y filter.</p>
  <
      `;
 insertarimagen(direccion,textosDescripcion);
});
document.getElementById('html').addEventListener('mousemove', function(){
const direccion = 'Pictures/html.png';
const textosDescripcion = `
<p class="texto-habilidad">Estructura semántica : Uso de etiquetas como header, section, article y footer para mejorar la accesibilidad y el SEO.</p>
<p class="texto-habilidad">Formularios y validaciones : Creación de formularios interactivos con input, textarea, select, y validaciones con atributos como required y pattern.</p>
<p class="texto-habilidad">Multimedia y gráficos : Inserción de imágenes, videos y audios con img, video, audio.</p>
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
