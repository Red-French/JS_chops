// EX 1. *** partial to be populated in HTML file *** //
const yogiQuotes =
  `<h2 style="color: blue">This Handlebars template is in script.js and injected into the HTML</h2>
  <h3>Favorite {{name}} Quotes</h3>
  <ol>
    {{#each quotes}}
    <li>{{quote}}</li>
    {{/each}}
  </ol>

  <h2 style="color: blue"><b>Triple Curly Braces</b></h2>
  <p style="color:red;">To use HTML tags or special characters in Handlebar templates, use triple curly braces:
    <div> ("triple stash") causes HTML tags and special characters to be recognized and interpreted correctly.  <b>The  paragraph below</b> has an HTML italics tag wrapping the bio and a copyright symbol at the end, both of which would show as actual HTML code with double braces.
    </div>
  </p>
  <p>{{{yogiBio}}}</p>  <!-- triple stash -->

  <h2 style="color: blue">Custom Helper Functions --> registerHelper()</h2>
  <p style="color:red;">Custom Helper Function creates this link (rather than using triple curly braces): {{makeLink "Yogi Berra Museum" "http://yogiberramuseum.org"}}</p>

  <p>{{changeColor "This text is green due to a custom helper function" color="green"}}</p>

  <p>{{sayHello}}</p>
  `

const template2 = Handlebars.compile(yogiQuotes);  // compile Handlebars template/partial

// REGISTERHELPER must be before template
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


const quoteData = template2({  // inject data into Handlebars template/partial
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

document.getElementsByClassName("quotes")[0].innerHTML += quoteData;  // inject compilted HTML into DOM



// EX 2. *** NOTE: Handlebars template/partial is already in HTML file *** //

// data to be populated in Handlebars template
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


// Grab appropriate Handlebars template in HTML
const entryHTML = document.getElementById("handlebars-template").innerHTML;
const entryHTML2 = document.getElementById("tagline-partial").innerHTML;

// Use handlebars to compile it into a template
const entryTemplate = Handlebars.compile(entryHTML);
const entryTemplate2 = Handlebars.compile(entryHTML2);

// inject data into templates
const entryOutput = entryTemplate(entryData);
const entryOutput2 = entryTemplate2(taglineData);

// inject compiled HTML into DOM
document.getElementById("handlebarsOutput").innerHTML += entryOutput;
document.getElementById("authorTagline").innerHTML += entryOutput2;

