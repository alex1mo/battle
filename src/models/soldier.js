import { Unit } from "./unit.js";
import { random } from "../helper/helper.js";

export class Soldier extends Unit {
  _experience = 0; //0-50 number

  set experience(v) {
    v = v > 50 ? 50 : v;
    this._experience = v;
  } //number

  get experience() {
    return this._experience;
  } ////number

  attackSuccess() {
    return (
      (0.5 * (1 + this.health / 100) * random(50 + this.experience, 100)) / 100
    );
  } //number

  makeDamage() {
    return 0.05 + this.experience / 100;
  } //number

  damageRecivere() {} //numeber
}
