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
    super.damageRecivere(d * 0.6);
    let randomOper = random(0, this.operators.length - 1);
    this.operators.forEach((e, i) => {
      if (randomOper === i) {
        e.damageRecivere(d * 0.2);
      } else {
        e.damageRecivere(d * 0.1);
      }
    });
  }

  upExperience() {
    this.operators.forEach(e => e.upExperience());
  }
}
