import 'babel-polyfill';
import Emmet from "./emmet";
import Wyldstyle from "./wyldstyle";
import Benny from "./benny";
import getRandom from "./utils";

export class LegoQuotes {

    characters: {};

    constructor() {

        this.characters = { emmet: new Emmet(), wyldstyle: new Wyldstyle(), benny: new Benny() };
    }

    getCharacters(object: any): any {
        return (<any>Object).values(object);
    }

    *randomQuote(): any {
        const chars = this.getCharacters(this.characters);
        const character = chars[getRandom(0, chars.length - 1)];

        yield `${character.name}: ${character.saySomething()}`;
    }

    getRandomQuote() {
        return this.randomQuote().next().value;
    }

};

(function () {
    var btn = document.getElementById("btnMore");
    var quote = document.getElementById("quote");

    const legoQuotes = new LegoQuotes();

    function writeQuoteToDom() {
        quote.innerHTML = legoQuotes.getRandomQuote();
    }

    btn.addEventListener("click", writeQuoteToDom);

    writeQuoteToDom();
})();