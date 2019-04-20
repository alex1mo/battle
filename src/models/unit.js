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
    let damage = this.getHealth() - d;
    this.setHealth(d);
  } //number

  isAlive() {
    return this.health > 0;
  } //boolean

  startRecharge() {
    this.isRecharge = !this.isRecharge;
    this.time = Date.now();
  }

  timeRecharge() {
    let time = Date.now();
    if (time - this.time > this.recharge) {
      this.isRecharge = !this.isRecharge;
    }
  }

  getHealth() {
    return this.health;
  } //number

  setHealth(v) {
    this.health = v;
  } //number
}
