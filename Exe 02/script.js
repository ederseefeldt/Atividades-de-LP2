document.getElementById("interruptor").addEventListener("click", ligarDesliga);

function ligarDesliga(){

    var imagem = document.getElementById('interruptor').src;
    var imagem_ligado = 'images/lampada_on.jpg';
    var imagem_desligado = 'images/lampada_off.jpg';
    let interruptor = document.getElementById("interruptor");

    if(imagem == imagem_ligado){
        document.getElementById('lamp').src = imagem_desligado;
        interruptor.src = 'images/interruptor_off.jpg';

    }else{
        document.getElementById('lamp').src = imagem_ligado;
        interruptor.src = 'images/interruptor_on.jpg';
    }
}