
function verify(): void { //Just to make sure the extension is running.
    console.log("Extension works!");
}
/** Class that represents the assiting lookup. */
class Assistant {
    constructor(public word: string, public language: string) {}
    definitions = fetch(`https://www.dict.com/${this.language}-english/${this.word}`)
        .then(response => response.text())
    
    public View(): void {
        console.log(this.definitions);
    }
}
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