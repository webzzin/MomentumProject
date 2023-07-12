const quotes = [
  {
    quote: "Life is like riding a bicycle.To keep your balance, you must keep moving. ", 
    author: "Albert Einstein"
  },
  {
    quote: "Learn from yesterday,live for today, hope for tomorrow. The important thins is not to stop questioning.",
    author:"Albert Einstein"
  },
  {
    quote: "What I can not create, I do not understand.",
    author:"Richard Phillips Feynman"
  },
  {
    quote: "The first principle is that you must not fool yourself and you are the easiest person to fool.",
    author:"Richard Phillips Feynman"
  },
  {
    quote: "All great deeds and all great thoughs have a ridiculous beginning.",
    author:"Albert Camus"
  },
  {
    quote: "Always go too far, because that's where you'll find the truth.",
    author:"Albert Camus"
  },
  {
    quote: "Autumn is a second spring when every leaf is a flower.",
    author:"Albert Camus"
  },
  {
    quote: "Man is the only creature who refuses to be what he is.",
    author:"Albert Camus"
  },
  {
    quote: "When the soul suffers too much, it develops a taste for misfortune.",
    author:"Albert Camus"
  },
  {
    quote: "Fiction is the lie through which we tell the truth",
    author:"Albert Camus"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}`;