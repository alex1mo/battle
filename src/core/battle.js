import { random } from "../helper/helper";

export class Battle {
  constructor(armies) {
    this._armies = armies;
  }

  start() {
    let battle = true;

    while (battle) {
      let armies = this.armies;
      let attackArmy = armies[random(0, armies.length - 1)];
      let attackSquad =
        attackArmy.squads[random(0, attackArmy.squads.length - 1)];

      while (true) {
        var defArmy = armies[random(0, armies.length - 1)];
        if (attackArmy !== defArmy) {
          break;
        }
      }
      let defSquad = defArmy.squads[random(0, defArmy.squads.length - 1)];

      let attackSuccess = attackSquad.attackSuccess();
      let defSuccess = defSquad.attackSuccess();
      console.log(attackArmy.name + " атакует " + defArmy.name);
      if (attackSuccess > defSuccess) {
        attackSquad.timeRecharge();
        let damage = attackSquad.makeDamage();
        attackSquad.startRecharge();
        defSquad.damageRecivere(damage);
        defSquad.getUnits();
        defArmy.getSquads();
        this.getArmies();
      }

      if (this.armies.length === 1) {
        console.log(this.armies[0]);
        console.log("победитель ------> " + this.armies[0].name);
        battle = !battle;
      }
    }
  }

  getArmies() {
    this.armies = this.armies.filter(e => e.isAlive());
  }

  get armies() {
    return this._armies;
  }

  set armies(v) {
    this._armies = v;
  }
}
