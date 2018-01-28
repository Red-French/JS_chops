# Handlebars

TWO WAYS TO HANDLE HTML TAGS OR SPECIAL CHARACTERS IN HANDLEBARS TEMPLATES
To use HTML tags or special characters in Handlebar templates, use either:

1) TRIPLE CURLY BRACES
    <div> ("triple stash") causes HTML tags and special characters to be recognized and interpreted correctly.  <b>The  paragraph below</b> has an HTML italics tag wrapping the bio and a copyright symbol at the end, both of which would show as actual HTML code with double braces.
    ```
    HTML Template:
    <p>{{{yogiBio}}}</p>  <!-- triple stash -->

    JavaScript:
    const quoteData = template2({  // inject data into Handlebars template/partial
  name: "Yogi Berra",
  yogiBio: '<i>Lawrence Peter "Yogi" Berra (May 12, 1925 – September 22, 2015) was an American professional baseball catcher, who later took on the roles of manager, and coach. He played 19 seasons in Major League Baseball (MLB) (1946–63, 1965), all but the last for the New York Yankees.</i>&copy'
});
    ```


2) CUSTOM HELPER FUNCTION
.
```
  HTML Template:
  <p style="color:red;">Custom Helper Function creates link below (rather than using triple curly braces):</p>
  {{makeLink "Yogi Berra Museum" "http://yogiberramuseum.org"}}

  JavaScript:
  // REGISTERHELPER must be before template
  Handlebars.registerHelper("makeLink", function(text, url) {
    text = Handlebars.Utils.escapeExpression(text);  // escape parameter to ensure safety
    url = Handlebars.Utils.escapeExpression(url);  // ALWAYS use escapeExpression() in custom helpers

    const theLink = '<a href="' + url + '">' + text + '</a>';
    return new Handlebars.SafeString(theLink);  // prevents string from being escaped (so triple curly braces not required)
  });
```

Passing attributes to a helper function:
```
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
  yogiBio: '<i>Lawrence Peter "Yogi" Berra (May 12, 1925 – September 22, 2015) was an American professional baseball catcher, who later took on the roles of manager, and coach. He played 19 seasons in Major League Baseball (MLB) (1946–63, 1965), all but the last for the New York Yankees.</i>&copy'
}, 
{
  data: {  // data here is available to ALL helper functions via options.data.keyname
      lang: "french"
    }
});
```