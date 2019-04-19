import { BaseUnit } from "./baseUnit";

export class Unit extends BaseUnit {
  constructor(health, recharge) {
    super();
    this.health = health;
    this.recharge = recharge;
    this.isRecharge = true;
    this.time = 0;
  }

  makeDamage() {
    return 0.05;
  } //number

  attackSuccess() {
    return 0.5 * (1 + this.health / 100);
  } //number

  damageRecivere(d) {
    this.health = this.health - d;
  } //number

  isAlive() {
    return this.health > 0 && true;
  } //boolean

  setRecharge() {} //number

  isRecharge() {} //boolean

  timeRecharge() {}

  startRecharge() {} //boolean

  getHealth() {} //number

  setHealth() {} //number
}
