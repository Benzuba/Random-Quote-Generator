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
    citation: "To Win in Battle ",
    year: 2012,
    tags: "Beginnings"
  },
  {
    quote: "Just Go With Thow Flow ",
    source: "Matt Lewis ",
    citation: "It Doesn't Even Matter ",
    year: 2019,
    tags: "Downfalls"
  }
]

function getRandomQuote(){
  var quote = quotes[Math.floor(Math.random()*quotes.length)];
  return quote;
}

function getRandomColor(){
  var color = colors[Math.floor(Math.random()*colors.length)];
  return color;
}

function printQuote(){
  var randomQuote = getRandomQuote();
  console.log(randomQuote);
  var html;
  html = '<p class="quote">' + randomQuote.quote +'</p>';
  html += '<p class="source">' + randomQuote.source;
  html +=  '<span class="citation">'+ randomQuote.citation + '</span>';
  html +=  '<span class="year">' + randomQuote.year + '</span> ' + '<br />';
  html +=  '<span class="tags">' + randomQuote.tags + '</span> ' + '</p>'
  document.getElementById('quote-box').innerHTML = html;

  document.body.style.backgroundColor = getRandomColor();
}

function timeQuote(){
  timeoutID = window.setInterval(printQuote, 2000);
}

timeQuote();
