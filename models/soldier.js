import { Unit } from "./unit.js"

export class Soldier extends Unit {
    _experience = 0; //0-50 number

    set experience(v) {
        if (v < 0) {
            v = 0;
        } else if (v > 50) {
            v = 50;
        }
        this._experience = v;
    } //number

    get experience() {
        return this._experience
    } ////number

    attckSaccese() { };//number

    makeDamage() { }//number

    damageRecivere() { };//numeber

}

