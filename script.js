// Gerar um número aleatório entre 0 e 100
let randomNumber = Math.floor(Math.random() * 101);

// Elementos do DOM
const messageElement = document.getElementById('message');
const guessResultElement = document.getElementById('guessResult');
const userGuessInput = document.getElementById('userGuess');
const playButton = document.getElementById('playButton');
const newGameButton = document.getElementById('newGameButton');

// Função para verificar se o usuário adivinhou o número
function checkGuess() {
    const userGuess = parseInt(userGuessInput.value);
    if (userGuess === randomNumber) {
        messageElement.textContent = 'Você acertou!';
        messageElement.style.color = 'green';
        guessResultElement.textContent = 'Parabéns!';
        document.getElementById("playButton").style.backgroundColor = "green";

    } else {
        messageElement.textContent = 'Você errou.';
        messageElement.style.color = 'red';
        guessResultElement.textContent = userGuess > randomNumber ? 'O valor correto é menor.' : 'O valor correto é maior.';
        document.getElementById("playButton").style.backgroundColor = "red";
    }
}
// Evento de clique no botão Jogar
playButton.addEventListener('click', () => {
    if (userGuessInput.value === '') {
        alert('Por favor, digite um número.');
    } else {
        checkGuess();
    }
});

// Evento de clique no botão Começar Novo Jogo
newGameButton.addEventListener('click', () => {
    // Gerar um novo número aleatório
    randomNumber = Math.floor(Math.random() * 101);
    // Limpar as mensagens e o campo de entrada
    messageElement.textContent = '';
    guessResultElement.textContent = '';
    userGuessInput.value = '';
    // Resetar as cores das mensagens
    messageElement.style.color = '#000';
});
