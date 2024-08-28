const quotes = [
    "'The best way to predict the future is to invent it'. – Alan Kay",
    "'Your time is limited, don't waste it living someone else's life.' – Steve Jobs",
    "'Success is not the key to happiness. Happiness is the key to success.' If you love what you are doing, you will be successful. – Albert Schweitzer",
    "'The only way to do great work is to love what you do.' – Steve Jobs",
    "'The future belongs to those who believe in the beauty of their dreams.' – Eleanor Roosevelt",
    "'In the middle of difficulty lies opportunity.' – Albert Einstein",
    "'The only limit to our realization of tomorrow is our doubts of today.' – Franklin D. Roosevelt",
    "'Believe you can and you're halfway there.' – Theodore Roosevelt",
    "'Do not wait to strike till the iron is hot, but make it hot by striking.' – William Butler Yeats",
    "'It does not matter how slowly you go as long as you do not stop.' – Confucius"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

document.addEventListener('DOMContentLoaded', (event) => {
    const quoteElement = document.getElementById('inspiring-quote');
    if (quoteElement) {
        quoteElement.textContent = getRandomQuote();
    }
});
