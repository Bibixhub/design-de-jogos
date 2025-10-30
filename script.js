document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.jogo-card');

    cards.forEach(card => {
        // Seleciona o botão, não o card inteiro para a ação de clique.
        const button = card.querySelector('.btn-saiba-mais');

        button.addEventListener('click', (event) => {
            // Previne que o clique no botão ative outra ação do card, se houver
            event.stopPropagation();

            const jogoNome = card.getAttribute('data-jogo');
            
            // Alerta personalizado com emoji pastel
            alert(`💖 Detalhes do Jogo: ${jogoNome}\n\nObrigado pelo seu interesse! A análise completa e detalhada de design será publicada em breve!`);
            
            console.log(`Botão 'Saiba Mais' clicado para: ${jogoNome}`);
        });
    });
});