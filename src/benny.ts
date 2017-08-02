import { LegoCharacter } from './LegoCharacter';
import getRandom from './utils';

export default class Benny extends LegoCharacter {

    sayings: string[];

    constructor() {
        super({ actor: "Charlie Day", character: "Benny" });
        this.sayings = [
            "Spaceship!",
            "Underwater spaceship!",
            "You're really letting the oxygen out of my tank here!"
        ];
    }
}