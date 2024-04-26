const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const hamburger1= document.querySelector('.hamburger');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('scr'))
    })
})

contenedorlight.addEventListener('click', (e)=>{
    if(e.target !== imageneslight){
        imageneslight.classList.toggle('show')
        imageneslight.classList.toggle('showImage')
        hamburger1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imageneslight.scr = imagen;
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showImage')
    hamburger1.style.opacity = '0'
}
