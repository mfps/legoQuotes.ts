import getRandom from './utils';

export class LegoCharacter {

    sayings: string[];
    actor: string;
    name: string;

    constructor(args: { character: string, actor: string }) {
        this.actor = args.actor;
        this.name = args.character;
        this.sayings = [''];
    }

    public saySomething(): string {
        return this.sayings[getRandom(0, this.sayings.length - 1)];
    }
}