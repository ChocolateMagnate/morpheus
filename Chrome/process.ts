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