function verify() {
    console.log("Extension works!");
}
/** Class that represents the assiting lookup. */
var Assistant = /** @class */ (function () {
    function Assistant(word, language) {
        this.word = word;
        this.language = language;
        this.definitions = fetch("https://www.dict.com/".concat(this.language, "-english/").concat(this.word))
            .then(function (response) { return response.text(); });
    }
    Assistant.prototype.View = function () {
        console.log(this.definitions);
    };
    return Assistant;
}());
/*

function fetchFromDisctionary(word: string, language: string) {}


function assist(word: string, language: string): void {
    //The core of the extension. Looks up the given word in dictionary and displays its transation, grammar.
    let dictionary = 0;
    // Getting the HTML
    async function FetchHtml()
    {
        let response = await fetch(`https://www.dict.com/${language}-english/${word}`);
        return await response.text(); // Returns it as Promise
    }


    // Usaing the HTML
    async function Do()
    {
        let html = await FetchHtml().then(text => {return text}); // Get html from the promise
        alert(html);
    }


    // Execute
    Do();
}
*/ 
