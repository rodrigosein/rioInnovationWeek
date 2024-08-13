function voltar() {
    window.location.href = "https://rodrigosein.github.io/transpetro-navalshore/"; // Substitua pelo link desejado
  }
// Objeto para armazenar a contagem de cliques para cada botão
    const clickCounts = {
        botaoTranspetro25Anos: 0,
        //botaoWeAreMovement: 0, // Descomente se for usar este botão
        botaoQuiz: 0,
        //botaoSuperTrunfo: 0, // Descomente se for usar este botão
        botaoTourVirtual: 0,
        botaoRevista: 0,
        botaoQrCodeRevista: 0
    };

    // Função para atualizar e mostrar contagem de cliques
    function updateCounts(buttonId) {
        clickCounts[buttonId]++;
        console.log(`Botão ${buttonId} clicado ${clickCounts[buttonId]} vezes`);
        // Aqui você pode adicionar código para enviar dados para um servidor ou atualizar a interface do usuário
    }

    // Adicionar event listeners para cada botão
    document.getElementById('botaoTranspetro25Anos').addEventListener('click', () => updateCounts('botaoTranspetro25Anos'));
    //document.getElementById('botaoWeAreMovement').addEventListener('click', () => updateCounts('botaoWeAreMovement')); // Descomente se for usar este botão
    document.getElementById('botaoQuiz').addEventListener('click', () => updateCounts('botaoQuiz'));
    //document.getElementById('botaoSuperTrunfo').addEventListener('click', () => updateCounts('botaoSuperTrunfo')); // Descomente se for usar este botão
    document.getElementById('botaoTourVirtual').addEventListener('click', () => updateCounts('botaoTourVirtual'));
    document.getElementById('botaoRevista').addEventListener('click', () => updateCounts('botaoRevista'));
    document.getElementById('botaoQrCodeRevista').addEventListener('click', () => updateCounts('botaoQrCodeRevista'));

    // Caso queira persistir a contagem entre as sessões, use localStorage
    // Exemplo: localStorage.setItem('clickCounts', JSON.stringify(clickCounts));
