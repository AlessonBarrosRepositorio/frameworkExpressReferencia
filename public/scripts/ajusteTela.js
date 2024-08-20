function ajustarTamanhoBody() {
    // Obtém a largura e a altura da janela
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    // Define a largura e a altura do body no CSS
    document.body.style.width = `${larguraJanela}px`;
    document.body.style.height = `${alturaJanela}px`;
}

// Chama a função ao carregar a página
window.onload = ajustarTamanhoBody;

// Chama a função sempre que a janela for redimensionada
window.onresize = ajustarTamanhoBody;
