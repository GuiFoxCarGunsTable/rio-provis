function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        
        console.log('Não ta funfano meu brother');
    }

}

document.querySelector('tecla_pom') tocaSomPom{
    
}




