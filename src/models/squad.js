import { BaseUnit } from "./baseUnit";

export class Squad extends BaseUnit {
  constructor(units) {
    super();
    this.units = units;
  }

  makeDamage() {} //number

  attckSaccese() {} //number

  damageRecivere() {} //number

  isAlive() {}
}
