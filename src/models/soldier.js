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

  upExperience() {
    this.experience += 1;
  }

  makeDamage() {
    return super.makeDamage() + this.experience / 100;
  } //number

  attackSuccess() {
    return (super.attackSuccess() * random(50 + this.experience, 100)) / 100;
  } //number
}
