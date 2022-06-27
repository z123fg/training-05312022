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

class MyJquery {
  #elements;
  constructor(selector) {
    this.#elements = document.querySelectorAll(selector);
  }

  html(innerHTML) {
    //this.#element.innerHTML = innerHTML;
    this.#elements.forEach((element) => {
      element.innerHTML = innerHTML;
    });
    return this;
  }

  hide() {
    //this.#element.style.display= "none";
    this.#elements.forEach((element) => {
      element.style.display = "none";
    });
    return this;
  }

  show() {
    //this.#element.style.removeProperty("display");
    this.#elements.forEach((element) => {
      element.style.removeProperty("display");
    });
    return this;
  }

  on(event, callback) {
    this.#elements.forEach((element) => {
      element.addEventListener(event, callback);
    });
    return this;
  }
}

function $$(selector) {
  return new MyJquery(selector);
}

$$("button.continue").html("<div>1234</div>");

//console.log($( "button.continue" ));
var hiddenBox = $$("#banner-message");
hiddenBox.hide().show();

$$.ajax = function (options) {
  const { url, data, method = "GET", success, error, complete } = options;
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
