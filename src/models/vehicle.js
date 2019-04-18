import { Unit } from "./unit";

export class Vehicle extends Unit {
  constructor(health, recharge, operators) {
    super(health, recharge);
    this.operators = operators; //obj [1,3]
  }

  makeDamage() {
    return 0.1 + sum(operators) / 100;
  }

  attckSaccese() {
    return 0.5 * (1 + this.health / 100) * gavg(operators);
  }

  getTotalHealth() {}

  setRecharge() {}

  isAlive() {}

  incExpForOperators() {}

  _isAliveSoldier() {} //remove soldier
}
