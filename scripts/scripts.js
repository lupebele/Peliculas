const factor = document.getElementById('factor');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

import {dataMovie} from "./datamovie.js";

const cargaDatamovie = dataMovie => {

    dataMovie.forEach(cardData => {
        const {id, name, img } = cardData;
        templateCard.querySelector('h5').textContent = name;
        templateCard.querySelector('img').setAttribute('src', img);
        templateCard.querySelector('.btn-secondary').dataset.id = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);        
    });
    factor.appendChild(fragment);
} 

document.addEventListener('DOMContentLoaded', cargaDatamovie(dataMovie))

factor.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('btn-secondary')){
        console.log(e.target.dataset.id)
        const id = e.target.dataset.id
        const descrp = dataMovie.find(d => d.id == id)
        console.log(`La pelicula es ${JSON.stringify(descrp)}`)
        localStorage.setItem('VerMas',JSON.stringify(descrp))
        window.location.href = 'description.html';
    }
})