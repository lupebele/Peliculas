let h5 =  document.querySelector('h5');
let img = document.querySelector('img');
let info = document.querySelector('p');
let boton = document.querySelector('#return');

const getLocalStorage = () => {

    let descrip = JSON.parse(localStorage.getItem('VerMas'));
    const {name, image, desc} = descrip;
    console.log(descrip)
    console.log(name)
    h5.textContent = name
    img.setAttribute('src', image);
    info.textContent = desc
}

document.addEventListener('DOMContentLoaded', getLocalStorage)

    boton.addEventListener('click', () => {
    window.location.href = 'index.html';
})