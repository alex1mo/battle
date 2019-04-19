import { BaseUnit } from "./baseUnit";
import { gavg, sum } from "../helper/helper";

export class Squad extends BaseUnit {
  constructor(type, units) {
    super();
    this.type = type;
    this._units = units;
  }

  makeDamage() {
    let recharged = this.units.filter(e => e.isRecharge);
    return sum(recharged.map(e => e.makeDamage())) + 10;
  } //number

  attackSuccess() {
    let arrAttackSuccess = this.units.map(e => e.attackSuccess());
    return gavg(arrAttackSuccess);
  } //number

  damageRecivere(d) {
    let damage = d / this.units.length;
    this.units.forEach(e => {
      e.damageRecivere(damage);
    });
  } //number

  isAlive() {
    return this.units.some(e => e.isAlive());
  }

  getUnits() {
    this.units = this.units.filter(e => {
      return e.isAlive();
    });
  }

  startRecharge() {
    let recharged = this.units.filter(e => e.isRecharge);
    recharged.forEach(e => {
      e.startRecharge();
    });
  }

  timeRecharge() {
    let recharged = this.units.filter(e => !e.isRecharge);
    recharged.forEach(e => {
      e.timeRecharge();
    });
  }

  get units() {
    return this._units;
  }

  set units(v) {
    this._units = v;
  }
}
