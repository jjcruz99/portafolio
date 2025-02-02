
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



//competencias insertar imagenes
 document.getElementById('java').addEventListener('click', function(){
     
 });

