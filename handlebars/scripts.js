// EX 1. *** partial to be populated in HTML file *** //
const yogiQuotes =
  `<h3>Favorite {{name}} Quotes</h3>
  <ol>
    {{#each quotes}}
    <li>{{quote}}</li>
    {{/each}}
  </ol>
  `

const template2 = Handlebars.compile(yogiQuotes);  // compile Handlebars template/partial

const quoteData = template2({  // inject data into Handlebars template/partial
  name: "Yogi Berra",
  quotes: [
    {quote: "No one goes there nowadays, it’s too crowded."},
    {quote: "It's tough to make predictions, especially about the future."},
    {quote: "You can observe a lot by just watching."},
    {quote: "In theory there is no difference between theory and practice. In practice there is."}
  ]
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
