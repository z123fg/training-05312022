/* 
  1. DOM manipulation
  2. Event binding
  3. Ajax request
*/

console.log("hello world");

//console.log($("button.continue"))
$("button.continue").html("<div>123</div>");

/* var hiddenBox = $( "#banner-message" );
hiddenBox.hide();
$( "#button-container button" ).on( "click", function( event ) {
  hiddenBox.show();
}); */

//xmlhttprequest
//ajax  Asynchronous JavaScript And XML
// $.ajax({
//   url: "https://jsonplaceholder.typicode.com/posts",
//   /* data: {
//     zipcode: 97201
//   }, */
//   success: function (result) {
//     console.log("result", result);
//     //$( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
//   },
// });

// $.ajax({
//   url: "https://jsonplaceholder.typicode.com/posts",
//   data: {
//     zipcode: 97201,
//   },
//   method: "POST",
//   success: function (result) {
//     console.log("result", result);
//     //$( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
//   },
// });

/**constuctor class for querey*/
class MyJquery {
  /**elements variable */
  #elements;

  /**constuctor for MyJquery. Takes selector as parameter. */
  constructor(selector) {
    this.#elements = document.querySelectorAll(selector);
  }

  /** function for html elements*/
  html(innerHTML) {
    //this.#element.innerHTML = innerHTML;
    this.#elements.forEach((element) => {
      element.innerHTML = innerHTML;
    });
    return this;
  }

  /**hides certain html elements */
  hide() {
    //this.#element.style.display= "none";
    this.#elements.forEach((element) => {
      element.style.display = "none";
    });
    return this;
  }

  /**shows certain html elements */
  show() {
    //this.#element.style.removeProperty("display");
    this.#elements.forEach((element) => {
      element.style.removeProperty("display");
    });
    return this;
  }

  /**returns event */
  on(event, callback) {
    this.#elements.forEach((element) => {
      element.addEventListener(event, callback);
    });
    return this;
  }
}
//returns class
function $$(selector) {
  return new MyJquery(selector);
}

/** displayes button*/
$$("button.continue").html("<div>1234</div>");

//console.log($( "button.continue" ));
var hiddenBox = $$("#banner-message");
hiddenBox.hide().show();

/**sets up ajax */
$$.ajax = function (options) {
  /**sets data from options*/
  const { url, data, method = "GET", success, error, complete } = options;
  /**fetches url and goes through success or error states */
  fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    ...(data ? { body: JSON.stringify(data) } : {}),
  })
    .then((res) => res.json())
    .then((data) => {
      success?.(data);
    })
    .catch((err) => {
      error?.(err);
    })
    .finally(() => {
      complete?.();
    });
};


$$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts",
  /* data: {
    zipcode: 97201
  }, */
  success: function (result) {
    console.log("result", result);
    //$( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  },
});

$$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts",
  data: {
    zipcode: 97201,
  },
  method: "POST",
  success: function (result) {
    console.log("result", result);
    //$( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  },
});



// $$( "#button-container button" ).on( "click", function( event ) {
//   hiddenBox.show();
// });
