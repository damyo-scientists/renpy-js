export default class RenpyCharacter {
    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    constructor(name, color) {
        this._name = name.split("'")[1];
        if (typeof color !== "undefined" && color !== "'") {
            this._color = color;
        } else {
            this._color = "#FFFFFF";
        }
    }
}