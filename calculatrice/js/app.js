const touches = [...document.querySelectorAll('.bouton')];
const listeKeycode = touches.map(touche => touche.dataset.key);


document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
});

document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key;
    console.log(valeur, typeof valeur);
})