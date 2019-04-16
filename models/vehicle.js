import { Unit } from "./unit";

export class Vehicle extends Unit {
    constructor(health, recharge, operators) {
        super(health, recharge)
        this.operators = operators //obj [1,3]
    }

    makeDamage() { };

    attckSaccese() { };

    getTotalHealth() { };

    setRecharge() { };

    isAlive() { };

    incExpForOperators() { }

    _isAliveSoldier() { } //remove soldier
}