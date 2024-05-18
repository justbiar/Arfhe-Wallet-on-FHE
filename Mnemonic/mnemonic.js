function generateRandomWord() {
    const words = [
        "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
        "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry",
        "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yam", "zucchini"
    ];
    return words[Math.floor(Math.random() * words.length)];
}

function generateRandomWords(num) {
    const wordSet = new Set();
    while (wordSet.size < num) {
        wordSet.add(generateRandomWord());
    }
    return Array.from(wordSet);
}

function displayRandomWords() {
    const seedWordsContainer = document.getElementById('seedWordsContainer');
    const words = generateRandomWords(12);
    
    words.forEach(word => {
        const wordDiv = document.createElement('div');
        wordDiv.className = 'grid-item';
        wordDiv.textContent = word;
        seedWordsContainer.appendChild(wordDiv);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    displayRandomWords();
});
