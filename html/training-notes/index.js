/*
    dns lookup, ip address
    browser devtool, network tab
    html5 doctype
    http and https, port 80 and 443
    cookie, session storage, local storage, difference
    html language, internationalization (i18n), localization (l10n)
    meta tag: author keyword descriptiopn, SEO (search engine optimization) purpose
    link: style blocking, cssom(css object model)
    CRP: CSSOM, DOM (document object model) render tree, critical render path
    ECMAScript JavaScript: ECMAScript + WebAPI, NodeJS = ECMAScript + NodeAPI
    inline element and block element
    semantic tag: Accessiblity (screen reader), SEO, readability
        https://www.a11yproject.com/checklist/
*/

/*
 * protocol: set of rules accepted by server and client-side
 * HTTP: hypertext transfer protocol
 * cookies: store data
 * session storage will be cleared when the tab is closed, local storage will be preserved until you remove it
 * cookies are more similar to local storage
 * html head tag --> metadata (data for data)
*/

//for while var const
//console.log("hello antra");
//console.log(this.console.log);
/* this.console.log();
window.console.log(); */
//console.log(this); //WebAPI

function foo (){
    const self = this
    console.log(self)
}

foo();


//console.log("element",document.getElementById("root"))