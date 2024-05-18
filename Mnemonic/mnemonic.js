// create_wallet.js

document.addEventListener('DOMContentLoaded', () => {
    const seedWordsContainer = document.getElementById('seedWordsContainer');
    const words = generateRandomWords(12);
    words.forEach((word, index) => {
        const wordElement = document.createElement('div');
        wordElement.classList.add('input-group');
        wordElement.innerHTML = `
            <label for="word${index + 1}">Kelime ${index + 1}:</label>
            <input type="text" id="word${index + 1}" value="${word}" readonly>
        `;
        seedWordsContainer.appendChild(wordElement);
    });

    document.getElementById('walletForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const password = document.getElementById('password').value;
        if (password) {
            // Save seed words and password to localStorage
            localStorage.setItem('seedWords', JSON.stringify(words));
            localStorage.setItem('walletPassword', password);
            alert('Cüzdan başarıyla oluşturuldu!');

            // Redirect to login page
            window.location.href = '../login.html';
        } else {
            alert('Lütfen bir şifre belirleyin.');
        }
    });
});

function generateRandomWords(count) {
    const wordList = ["apple", "banana", "cat", "dog", "elephant", "frog", "grape", "house", "ice", "jacket", "kangaroo", "lemon"];
    const selectedWords = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        selectedWords.push(wordList[randomIndex]);
    }
    return selectedWords;
}
