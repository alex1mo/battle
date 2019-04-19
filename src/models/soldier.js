import { Unit } from "./unit.js";
import { random } from "../helper/helper.js";

export class Soldier extends Unit {
  _experience = 0; //0-50 number

  constructor(health, recharge) {
    super(health, recharge);
  }

  set experience(v) {
    v = v > 50 ? 50 : v;
    this._experience = v;
  } //number

  get experience() {
    return this._experience;
  } ////number

  makeDamage() {
    return super.makeDamage() + this.experience / 100;
  } //number

  attackSuccess() {
    return (super.attackSuccess() * random(50 + this.experience, 100)) / 100;
  } //number

  damageRecivere(d) {
    this.health = this.health - d;
  }

  isAlive() {
    return this.health > 0;
  }

  startRecharge() {
    this.isRecharge = !this.isRecharge;
    this.time = Date.now();
  }

  timeRecharge() {
    let time = Date.now();
    if (time - this.time < this.recharge) {
      this.isRecharge = !this.isRecharge;
    }
  }
}
