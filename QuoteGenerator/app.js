
const quotesContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("qoute")
const authorText = document.getElementById("author")
const twitter = document.getElementById("twitter-button")
const newQuotesBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")

let apiQuotes = [];

function loading(){
    quotesContainer.hidden = true
    loader.hidden = false
}
function complete(){
    quotesContainer.hidden = false
    loader.hidden = true
}
//click new quotes text
newQuotesBtn.addEventListener('click',newQuotes)
//Show new Quoters
function newQuotes() {
    loading();
    // Pick a random quote from apiQuotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    //check if author fiels is blank show "Unknown"
    if (!quote.authon) {
        
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    

    if (quote.text.length > 50) {

        quoteText.classList.add('long-quote')
    }
     else {
        quoteText.classList.remove('long-quote')
    }
    authorText.textContent = quote.text;

// hide loader 
complete();
}
//Get Quotes From API
async function getQuotes() {
    
    //API url
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        quote-container
    } catch (error) {
        //Catch Error Here
    }

}
getQuotes()

