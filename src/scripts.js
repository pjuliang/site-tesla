// document = ir no HTML
// querySelector = busca o que eu quiser que ele busque
document.getElementById('comprarAgoraBtn').addEventListener('click', function() {
    document.getElementById('formulario').classList.add('visible');
});


let formulario = document.querySelector(".formulario")

function aparecerFormulario(){
    formulario.style.left = "50%"
}

function desaparecerFormulario(){
    formulario.style.left = "-50%"
}

