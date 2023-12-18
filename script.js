const quoteApi =  "https://api.quotable.io/random?minLength=80&maxLength=100";

const quotes = document.getElementById("quote");
const userInput = document.getElementById("quote-input");

let quoote = "";
let time = 60;
let timer = "";
let mistakes = 0;

// random quotes//

const newQuote = async () =>{
    const response = await fetch(quoteApi);
    const data = await response.json();
    quotes = data.content;

    let arr = quotes.split("").map((value) => {
        return "<span class = 'quote-chars'>" + value + " </span> ";
    });
    quoteSection.innerHTML += arr.join("");
} ;

userInput.addEventListener("input", () =>{
    let quoteChars = document.querySelectorAll("quote-chars");
    quoteChars = Array.from(quoteChars);
}) 