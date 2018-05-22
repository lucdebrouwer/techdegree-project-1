// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Defines an object array that contains properties and values of each quote
//let quote;
let randomQuote;
let quotes = [
    {
        quote: "I could agree with you but then we'd both be wrong",
        source: "Harvey Specter",
        citation: "Suits",
        year: null,
    },
    {
        quote: "When you're backed against the wall, break the goddamn thing down",
        source: "Harvey Specter",
        citation: "Suits",
        year: null,
    },
    {
        quote: "You always have a choice",
        source: "Harvey Specter",
        citation: "Suits",
        year: null,
    },
    {
        quote: "…the real world is essentially a simulation anyway. I like that idea. That even if we’re not real we represent a dynamic. A tiny finger tracing a line in the infinite. A shape. And then we’re gone. All I’m saying is that if we’re just information, just noise in a system, we might as well be a symphony.",
        source: "root",
        citation: "S05E10, Person of Interest",
        year: 2016
    }, 
    {
        quote: "Sure. Everyone dies alone. But if you mean something to someone—if you help someone, or love someone, if even a single person remembers you—then maybe you never really die at all.",
        source: "The Machine",
        citation: "S05E13 Finale, final line ",
        year: 2016
        
    },
    {
        quote: "When you find that one person who connects you to the world, you become someone different. Someone better. When that person is taken from you, what do you become then?",
        source: "John Reese",
        citation: null,
        year: null

    }
]

function getRandomQuote(quote) {
    // Generate a random number 
    let rndNum = Math.floor(Math.random() * quotes.length);
    
    // Using the rndNum to get a random quote
    randomQuote = quotes[rndNum];

    // Uncomment for debugging purpose
    //console.log(randomQuote);

    return randomQuote;
   
}

function printQuote(content) {
 let myQuote = getRandomQuote(quotes);
 let contentToDisplay = "<p class=\"quote\">" + myQuote.quote + "</p>";
     contentToDisplay += "<p class=\"source\">" + myQuote.source + "</p>";
     contentToDisplay += "<span class=\"citation\">" + myQuote.citation + "</span";
     contentToDisplay += "<span class=\"year\">" + myQuote.year + "</span";

 let quoteBox = document.getElementById('quote-box');
 quoteBox.innerHTML = contentToDisplay;
 return quoteBox;
}
console.log(printQuote());
printQuote();
//getRandomQuote(quotes);