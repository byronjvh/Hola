const holaAnimado = document.getElementById('container-hola');
const flechaAnimado = document.getElementById('flecha');
const preguntaAnimado = document.getElementById('container-pregunta');
const respuestaAnimado = document.getElementById('container-respuesta');
const antPreguntaAnimado = document.getElementById('antes-pregunta');
const coreanoAnimado = document.getElementById('coreano-container');
let w = window.innerWidth;
const animar = (entradas, observador) =>{
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        } 
        else{ //para que desaparezca
            entrada.target.classList.remove('visible');
        }
    });
}
let observador;
let observador2;

if(w < 1000){
    observador = new IntersectionObserver(animar, {
        root: null,
        rootMargin: '200px 0px 0px 0px',
        threshold: 1
    });
}
else{
    observador = new IntersectionObserver(animar, {
        root: null,
        rootMargin: '500px 0px 0px 0px',
        threshold: 1
    });
}

if(w < 1000){
    observador2 = new IntersectionObserver(animar, {
        root: null,
        rootMargin: '200px 0px 0px 0px',
        threshold: 0.5
    });
}
else{
    observador2 = new IntersectionObserver(animar, {
        root: null,
        rootMargin: '500px 0px 0px 0px',
        threshold: 1
    });
}

observador.observe(holaAnimado);
observador2.observe(flechaAnimado);
observador.observe(antPreguntaAnimado);
observador.observe(preguntaAnimado);
observador2.observe(respuestaAnimado);
observador.observe(coreanoAnimado);
//botón

const boton = document.getElementById('boton-no');
const botonSi = document.getElementById('si');
const coreanoSection = document.getElementById('coreano');

let contador = 0;

function cambio(){
    if(contador == 0){
        boton.classList.add('primer-click');
        boton.classList.remove('tercer-click')
        contador=1;
    }
    else if(contador == 1){
        boton.classList.remove('primer-click');
        boton.classList.add('segundo-click');
        contador=2; 
    }
    else if(contador == 2){
        boton.classList.remove('segundo-click');
        boton.classList.add('tercer-click');
        contador=3; 
    }
    else if(contador == 3){
        boton.classList.add('cuarto-click');
        boton.classList.remove('tercer-click')
    }
}

function coreano(){
    coreanoSection.classList.add('visible');
}


boton.addEventListener('click',cambio,true);
botonSi.addEventListener('click',coreano, true);