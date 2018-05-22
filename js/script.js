// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);



let randomQuote;
// Defines an object array that contains properties and values of each quote
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
        citation: "S05E10, Person of Interest ",
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
        source: "John Reese ",
        citation: null,
        year: 2015
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

// Gets a random quote from the available quotes
 let myQuote = getRandomQuote(quotes);

 let quoteToDisplay = "<p class=\"quote\">" + myQuote.quote + "</p>";

 // Structure the data and check whether a property contains any null values, if not display the values
 let sourceToDisplay = "<p class=\"source\">";
 sourceToDisplay += myQuote.source;
 if(myQuote.citation !== null) {
     sourceToDisplay += "<span class=\"citation\">" + myQuote.citation + "</span>"; 
 }
 if(myQuote.year !== null) {
     sourceToDisplay += "<span class=\"year\">" + myQuote.year + "</span>";
 }
 sourceToDisplay += "</p>";
 quoteToDisplay += sourceToDisplay;

// Get the quotebox element from the document and fill it with the data
 let quoteBox = document.getElementById('quote-box');
 quoteBox.innerHTML = quoteToDisplay;

 // Returns the data
 return quoteBox;
}
console.log(printQuote());
printQuote();
