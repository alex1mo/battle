import { BaseUnit } from "./baseUnit";
import "../helper/helper.js";

export class Squad extends BaseUnit {
  units = [];

  constructor(units, type) {
    super();
    this.units = units;
    // this.type = type;
  }

  makeDamage() {} //number

  attackSuccess() {} //number

  damageRecivere() {} //number

  isAlive() {}
}
