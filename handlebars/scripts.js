// *** HELPER FUNCTIONS (must be before templates) ***
// *** HELPER FUNCTIONS (must be before templates) ***
// *** HELPER FUNCTIONS (must be before templates) ***

Handlebars.registerHelper("makeLink", function(text, url) {
  text = Handlebars.Utils.escapeExpression(text);  // escape parameter to ensure safety
  url = Handlebars.Utils.escapeExpression(url);  // ALWAYS use escapeExpression() in custom helpers

  const theLink = '<a href="' + url + '">' + text + '</a>';
  return new Handlebars.SafeString(theLink);  // prevents string from being escaped (so triple curly braces not required)
});

Handlebars.registerHelper("changeColor", function(text, options) {
  text = Handlebars.Utils.escapeExpression(text);

  if(options.hash.color === "red") {
    return new Handlebars.SafeString("<span class='redText'>" + text + "</span>");
  } else if(options.hash.color === "blue") {
    return new Handlebars.SafeString("<span class='blueText'>" + text + "</span>");
  } else if(options.hash.color === "green") {
    return new Handlebars.SafeString("<span class='greenText'>" + text + "</span>");
  }
});

Handlebars.registerHelper("sayHello", function(options) {
  switch(options.data.lang) {
    case "spanish":
      return "Hola";
      break;
    case "french":
      return "Bonjour";
      break;
    case "south":
      return "Hey there";
      break;
    default: 
      return "Hello";
  }
});

Handlebars.registerHelper("makeRadioBtns", function(name, options) {
  let radioList = options.fn();
  console.log("radioList = ", radioList)
  radioList = radioList.trim().split("\n");

  let output = "";

  for(let val in radioList) {
    let item = radioList[val].trim();
    output += '<input type="radio" name="' + name + '" + value="' + item +'">' + item + '<br>';
  }
  return output;
});

Handlebars.registerHelper("areEqual", function(num1, num2, options) {
  if (num1 === num2) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper("if", function(data, options) {
  if (data === "isActive") {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper("with", function (data, options) {
  return options.fn(data);
});

Handlebars.registerPartial("partialTemplate", '{{name}}');



// *** define templates & data, compile templates and inject data and add to DOM ***
// *** define templates & data, compile templates and inject data and add to DOM ***
// *** define templates & data, compile templates and inject data and add to DOM ***

// templates (other templates are in HTML)
const yogiQuotes =
  `<h2 style="color: blue"><U>This Handlebars template is in script.js and injected into the HTML</U></h2>
  <h3>Favorite {{name}} Quotes</h3>
  <ol>
    {{#each quotes}}
    <li>{{quote}}</li>
    {{/each}}
  </ol>

  <h2 style="color: blue"><b><u>Triple Curly Braces</u></b></h2>
  <p style="color:red;">To use HTML tags or special characters in Handlebar templates, use triple curly braces:
    <div> ("triple stash") causes HTML tags and special characters to be recognized and interpreted correctly.  <b>The  paragraph below</b> has an HTML italics tag wrapping the bio and a copyright symbol at the end, both of which would show as actual HTML code with double braces.
    </div>
  </p>
  <p>{{{yogiBio}}}</p>  <!-- triple stash -->

  <h2 style="color: blue"><u>Custom Helper Functions --> registerHelper(name, helper-function)</u></h2>
  <p><b>registerHelper(name, fxn)</b> registers a helper accessible by any template in the environment.  This allows you to write complex logic using handlebar’s expression system. There are 2 kinds of helpers:
  <div>function helper - for a single expression</div>
  <div>block helper - uses a block expression</div>
  </p>
  <h3>Function Helpers</h3>
  <p style="color:red;">1. A helper function, makeLink, creates this link (rather than using triple curly braces to recognize the HTML tag): {{makeLink "Yogi Berra Museum" "http://yogiberramuseum.org"}}</p>

  <p>2. A helper function, changeColor, accepts an attribute from the template to set the font color:  {{changeColor "This text is green due to a custom helper function" color="green"}}</p>

  <p>3. A helper function, sayHello, w/ switch statement determines the language to greet you with by checking a value in an object (the object is a parameter of the template):  {{sayHello}}</p>
  `

// data to be injected into Handlebars template
const entryData = {
  title: "My Handlebars Post",
  body: "This is some fantastic post!",
  tags: [
    {
      category: "technology",
      name: "handlebars"
    },
    {
      category: "author",
      name: "Red"
    }
  ]
};
const taglineData = {
  author_first_name: "Red",
  author_last_name: "French",
  authored_date: "January 27, 2018"
};

const groceryList = {
  groceries: [
      {item: "Potatos"},
      {item: "Flour"},
      {item: "Frozen Pizza"},
      {item: "Baked Beans"}
  ]
}



// Grab appropriate Handlebars template in HTML
const entryHTML = document.getElementById("handlebars-template").innerHTML;
const entryHTML2 = document.getElementById("tagline-partial").innerHTML;
const blockHelpers = document.getElementById("blockHelper-template").innerHTML;  // for radio buttons
const bookShelf = document.getElementById("books").innerHTML;
const partialBlock = document.getElementById("partialTemplate").innerHTML;
const groceryHTML = document.getElementById("grocery-template").innerHTML;

// compile into a template/partial
const template2 = Handlebars.compile(yogiQuotes);
const entryTemplate = Handlebars.compile(entryHTML);
const entryTemplate2 = Handlebars.compile(entryHTML2);
const blockTemplate = Handlebars.compile(blockHelpers);  // for radio buttons
const someBooks = Handlebars.compile(bookShelf);
const partialTemplate = Handlebars.compile(partialBlock);
const groceriesTemplate = Handlebars.compile(groceryHTML);

// inject data into templates
const entryOutput = entryTemplate(entryData);
const entryOutput2 = entryTemplate2(taglineData);
const entryOutput3 = blockTemplate();  // for radio buttons
const groceryShop = groceriesTemplate(groceryList);
const quoteData = template2({
  name: "Yogi Berra",
  quotes: [
    {quote: "No one goes there nowadays, it’s too crowded."},
    {quote: "It's tough to make predictions, especially about the future."},
    {quote: "You can observe a lot by just watching."},
    {quote: "In theory there is no difference between theory and practice. In practice there is."}
  ],
  yogiBio: '<i>Lawrence Peter "Yogi" Berra (May 12, 1925 – September 22, 2015) was an American professional baseball catcher, who later took on the roles of manager, and coach. He played 19 seasons in Major League Baseball (MLB) (1946–63, 1965), all but the last for the New York Yankees.</i>&copy'
}, 
{
  data: {  // data here is available to ALL helper functions via options.data.keyname
      lang: "french"
    }
});

const bookData = someBooks(
  {
    title: "Harry Potter",
    techData: {
      isbn: "0-7475-3269-9",
      author: "J. K. Rowling"
    }
  }
);

const partialData = partialTemplate({
  name: "John Wayne",
  friend: "John Steinbeck",
  comment: "Where should we vacation?",
  replies: [{
    friend: "Milton Friedman",
    comment: "In the mountains."
  },
  {
    friend: "Walter Mathau",
    comment: "The beach!"
  }]
});

// inject compiled HTML into DOM
document.getElementsByClassName("quotes")[0].innerHTML += quoteData;  // Yogi quotes
document.getElementById("handlebarsOutput").innerHTML += entryOutput;
document.getElementById("authorTagline").innerHTML += entryOutput2;
document.getElementsByClassName("radioBtns")[2].innerHTML += entryOutput3;  // for radio buttons
document.getElementById("bookStore").innerHTML += bookData;
document.getElementById("partialDiv").innerHTML += partialData;
document.getElementById("groceryDiv").innerHTML += groceryShop;
