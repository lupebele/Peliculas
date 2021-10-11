//Paso 4
let arrayRegister = [];

//Paso 1
const saveRegister = () => {
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let telefono = document.getElementById('phone').value;
    let direccion = document.getElementById('address').value;
    let observ = document.getElementById('observ').value;

    saveLocalStorage(nombre,apellido,telefono,direccion,observ);
    alert(`Usuario registrado`);
}
//Paso 2
let form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    saveRegister();
})
//Paso 3
const saveLocalStorage = (nm, ape, tel, dir, observt) => {
    const objeto = {
        nombre: nm, 
        apellido: ape, 
        telefono: tel, 
        direccion: dir, 
        observ: observt
    }

        arrayRegister.push(objeto)

//Paso 5
    localStorage.setItem('Registros',JSON.stringify(arrayRegister));
}