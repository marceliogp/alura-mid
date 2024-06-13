function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//listaDeTeclas[0].onclick = tocaSomPom;

let contador = 0;

//enquanto
//while (contador < listaDeTeclas.length) {

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const audio = `#som_${instrumento}`;     //template string

    tecla.onclick = function () {
        tocaSom(audio);
    }
    
    //contador++;
    
    console.log(contador);
}
