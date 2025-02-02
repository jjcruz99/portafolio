
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
const conTextosTecnologia = document.getElementById('texto-competencia');
const textosActuales = document.querySelectorAll('.texto-habilidad');
//funcion para insertar imagen tecnologia
function insertarimagen(direccion,textosActuales){
  imgTecnologia.src = direccion;

  conTextosTecnologia.innerHTML = textosActuales;
}

 document.getElementById('java').addEventListener('mousemove', function(){
     const direccion = 'Pictures/java.png';
     const textosDescripcion = `
     <p class="texto-habilidad">-Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt.</p>
     <p class="texto-habilidad">-Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt.</p>
     <p class="texto-habilidad">-Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt.</p>
         `;
    insertarimagen(direccion,textosDescripcion);
 });
 document.getElementById('sprintboot').addEventListener('mousemove', function(){
  const direccion = 'Pictures/boot_spring.png';
  
  const textosDescripcion = `
    <p class="texto-habilidad">-Lo consectetur adipisicing elit. Hic, deserunt.</p>
    <p class="texto-habilidad">-Lo consectetur adipisicing elit. Hic, deserunt.</p>
    <p class="texto-habilidad">-Lo consectetur adipisicing elit. Hic, deserunt.</p>
        `;
   insertarimagen(direccion,textosDescripcion);
});
document.getElementById('github').addEventListener('mousemove', function(){
  const direccion = 'Pictures/github.png';
  const textosDescripcion = `
  <p class="texto-habilidad">-Lorem ipsum dolor .</p>
  <p class="texto-habilidad">-Lorem ipsum dolor .</p>
  <p class="texto-habilidad">-Lorem ipsum dolor .</p>
      `;
 insertarimagen(direccion,textosDescripcion);
});
document.getElementById('sql').addEventListener('mousemove', function(){
const direccion = 'Pictures/mysql.png';
const textosDescripcion = `
<p class="texto-habilidad">-Lorem  adipisicing elit. Hic, deserunt.</p>
<p class="texto-habilidad">-Lorem ipsum dolor sit  adipisicing elit. Hic, deserunt.</p>
<p class="texto-habilidad">-Lorem ipsum dolor sit adipisicing elit. Hic, deserunt.</p>
    `;
insertarimagen(direccion,textosDescripcion);
});
document.getElementById('js').addEventListener('mousemove', function(){
  const direccion = 'Pictures/javaScript.png';
  const textosDescripcion = `
  <p class="texto-habilidad">-Lorem  dolor sit adipisicing elit. Hic, deserunt.</p>
  <p class="texto-habilidad">-Lorem olor sit amet consectetur adipisicing elit. Hic, deserunt.</p>
  <p class="texto-habilidad">-ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt.</p>
      `;
 insertarimagen(direccion,textosDescripcion);
});
document.getElementById('css').addEventListener('mousemove', function(){
  const direccion = 'Pictures/css.png';
  const textosDescripcion = `
  <p class="texto-habilidad">- ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt.</p>
  <p class="texto-habilidad">- ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt.</p>
  <p class="texto-habilidad">- ipsum dolor sit amet consectetur adipisicing elit. Hic, deserunt.</p>
      `;
 insertarimagen(direccion,textosDescripcion);
});
document.getElementById('html').addEventListener('mousemove', function(){
const direccion = 'Pictures/html.png';
const textosDescripcion = `
<p class="texto-habilidad">-Lorem ipsum  sit amet consectetur adipisicing elit. Hic, deserunt.</p>
<p class="texto-habilidad">-Lorem ipsum sit amet consectetur adipisicing elit. Hic, deserunt.</p>
<p class="texto-habilidad">-Lorem ipsum  sit amet consectetur adipisicing elit. Hic, deserunt.</p>
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
