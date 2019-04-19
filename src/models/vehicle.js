import { Unit } from "./unit";
import { sum, gavg, random } from "../helper/helper";

export class Vehicle extends Unit {
  constructor(health, recharge, operators) {
    super(health, recharge);
    this.operators = operators; //obj [1,3]
  }

  makeDamage() {
    return (
      super.makeDamage() * 2 + sum(this.operators.map(e => e.experience)) / 100
    );
  }

  attackSuccess() {
    let arrAttackSuccess = this.operators.map(e => e.attackSuccess());
    return super.attackSuccess() * gavg(arrAttackSuccess);
  }

  damageRecivere(d) {
    this.health = this.health - d * 0.6;
    let randomOper = random(0, this.operators.length - 1);
    this.operators.forEach((e, i) => {
      if (randomOper === i) {
        e.health = e.health - d * 0.2;
      } else {
        e.health = e.health - d * 0.1;
      }
    });
  }

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

  isAlive() {
    return this.health > 0;
  }
}
