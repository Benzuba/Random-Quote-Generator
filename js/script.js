// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var randomQuote;
var colors = ["blue", "red", "black"]
var timeoutID;
var quotes = [
  {
    quote: "This is going to be fun ",
    source: "Dave Jones ",
    citation: "Journey of Life ",
    year: 1986,
    tags: "Easy Living:"
  },
  {
    quote: "Lets get started ",
    source: "Tony Appleton ",
    // citation: "To Win in Battle ",
    year: 2012,
    tags: "Beginnings:"
  },
  {
    quote: "Just Go With Thow Flow ",
    source: "Matt Lewis ",
    citation: "It Doesn't Even Matter ",
    year: 2019,
    tags: "Downfalls:"
  },
  {
    quote: "It'll All Work Out",
    source: "Amy Limp ",
    citation: "It Doesn't Even Matter ",
    year: 2012,
    tags: "Hearing:"
  },
  {
    quote: "Better Before Worse ",
    source: "David Tanner ",
    // citation: "It Doesn't Even Matter ",
    // year: 1985,
    // tags: "Storms:"
  }
]
// Using the Math functions this function creates a random number to select a randmon quote from the quotes array of objects.
function getRandomQuote(){
  var quote = quotes[Math.floor(Math.random()*quotes.length)];
  return quote;
}
//Using the Math functions this function creates a random number to select a random color from the colors array.
function getRandomColor(){
  var color = colors[Math.floor(Math.random()*colors.length)];
  return color;
}
//printQuote calls getRandomQuote and then constructs a string using the quote object for HTML
function printQuote(){
  var randomQuote = getRandomQuote();
  var html;
  html = '<p class="quote">' + randomQuote.quote +'</p>';
  html += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation){
    html +=  '<span class="citation">'+ randomQuote.citation + '</span>';
  }
  if (randomQuote.year){
    html +=  '<span class="year">' + randomQuote.year + '</span> ' + '<br />';
  }
  if (randomQuote.tags){
    html +=  '<span class="tags">' + randomQuote.tags + '</span> ';
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
  //calls the getRandomColor and crates a string to assign a random color to the background
  document.body.style.backgroundColor = getRandomColor();
}
//sets a time to call the printQuote function every 2 seconds
function timeQuote(){
  timeoutID = window.setInterval(printQuote, 2000);
}

timeQuote();
