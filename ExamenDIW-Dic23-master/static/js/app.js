console.log("Hola mundo...");

// Continuar codigo javascript desde aqui ...


var borrar = document.querySelectorAll('.borrar');
var borrarModal = document.getElementById('borrarEntrada');

function openDialog(){
    borrarModal.showModal();
}
borrar.forEach(function(button){
    button.addEventListener('click',openDialog);
});

borrarModal.addEventListener('click', function(){
    borrarModal.close();
});


var nueva = document.querySelector('#nueva');
var nuevaEntrada= document.getElementById('nuevaEntrada');



nueva.addEventListener('click', function(){
    nuevaEntrada.showModal();
});
nuevaEntrada.addEventListener('click', function(){
    nuevaEntrada.close();
});