window.onload = function() {
 // Try to read from local storage, otherwise set to default
 let currentTheme = localStorage.getItem("mytheme") || "default";
  
 const themeSelector = document.getElementById("theme-selector");
 console.log("Attaching to ",themeSelector);

 // Set the theme that we read from local storage
 setTheme("default", currentTheme);
 themeSelector.value = currentTheme;

 // Add change event listener
 themeSelector.addEventListener("change", function(e) {
   // Get the user's choice from the event object `e`.
   const newTheme = e.currentTarget.value;

   // Set the theme
   setTheme(currentTheme, newTheme);
 });

 function setTheme(oldTheme, newTheme) {
   const body = document.getElementsByTagName("body")[0];

     console.log("changing theme from ",oldTheme," to ", newTheme);
   // Remove old theme scope from body's class list
   body.classList.remove(oldTheme);

   // Add new theme scope to body's class list
   body.classList.add(newTheme);

   // Set it as current theme
   currentTheme = newTheme;

   // Store the new theme in local storage
   localStorage.setItem("mytheme", newTheme);
 }
 
const quotes = [
    {
      "quote" : '"I knew I shouldn\'t have gotten out of bed today."', 
      "speaker" : '- Squidward',
    },{
    "quote" : '"I\'m hotter than a hickory smoked sausage!"', 
    "speaker" : '- Sandy Cheeks'
    },{
    "quote" : '"Goodbye everyone, I\'ll remember you all in therapy."',
    "speaker" : '- Plankton'
    },{
    "quote" : '"Wake me up when I care."', 
    "speaker" : '- Squidward'
    },{   
    "quote" : '"A 5 letter word for happiness ... MONEY!"',
    "speaker" : '- Mr. Krabs'
    },{      
    "quote" : '"It\'s just a cruel reminder that I\'m single and likely to remain that way forever."',
    "speaker" : '- Squidward'
    },{
    "quote" : '"If I don\'t make any money today I\'ll surely break out in a rash!"', 
    "speaker" : '- Mr. Krabs'
    },{
    "quote" : '"Holographic Meatloaf? My favorite!"', 
    "speaker" : '- Plankton'
    },{ 
    "quote" : '"Ah, a few blobs of ink doesn\'t prove a thing. I\'m as evil as ever, I\'ll prove it right now by stealing the Krabby Patty secret formula."', 
    "speaker" : '- Plankton'
    },{
    "quote" : '"Stupidity isn\'t a virus, but it sure is spreading like one."', 
    "speaker" : '- Sandy Cheeks'
    },{
    "quote" : '"Give to the Children\'s fund? What have the children ever done for me?"', 
    "speaker" : '- Mr. Krabs'
    },{
    "quote" : '"I\'ll have you know that I stubbed by toe last week and only cried for 20 minutes."', 
    "speaker" : '- SpongeBob'
    },{
    "quote" : '"Can you give SpongeBob his brain back, I had to borrow it for the week."', 
    "speaker" : '- Patrick'
    },{
    "quote" : '"I order the food, you cook the food. The customer gets the food. We do that for 40 years, and then we die."', 
    "speaker" : '- Squidward'
    },
  ]

  // Random Quote function to display a quote when a user clicks the button
  function randomQuote() {
    document.getElementById("quotation").style.display="block";
    document.getElementById("speaker").style.display='block';
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    quotation.innerText = `${random.quote}`;
    speaker.innerText = `${random.speaker}`;
  }
  
  genquote.addEventListener("click", randomQuote);
}