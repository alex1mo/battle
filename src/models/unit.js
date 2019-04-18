import { BaseUnit } from "./baseUnit";

export class Unit extends BaseUnit {
  constructor(health, recharge, power) {
    super();
    this.health = health;
    this.recharge = recharge;
    // this.power = power
  }

  makeDamage() {} //number

  attackSuccess() {} //number

  damageReceiver() {} //number

  isAlive() {} //boolean

  setRecharge() {} //number

  isRecharge() {} //boolean

  timeRecharge() {}

  startRecharge() {} //boolean

  getHealth() {} //number

  setHealth() {} //number
}
