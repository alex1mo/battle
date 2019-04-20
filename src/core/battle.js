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

      let strategy = attackArmy.getTargetArmy(armies);

      let { attackSquad, defArmy, defSquad } = strategy;

      let attackSuccess = attackSquad.attackSuccess();
      let defSuccess = defSquad.attackSuccess();
      if (attackSuccess > defSuccess) {
        let dataBattle = {
          squad: defArmy.squads.length,
          armies: armies.length
        };
        attackSquad.timeRecharge();
        let damage = attackSquad.makeDamage();
        attackSquad.startRecharge();
        defSquad.damageRecivere(damage);
        defSquad.getUnits();
        defArmy.getSquads();
        this.getArmies();
        attackSquad.upExperience();
        if (
          defArmy.squads.length < dataBattle.squad ||
          this.armies.length < dataBattle.armies
        ) {
          console.log(attackArmy.name + " атакует " + defArmy.name);
          if (defArmy.squads.length < dataBattle.squad) {
            console.log(
              "отряд противника уничтожен,осталось " + defArmy.squads.length
            );
          }
          if (this.armies.length < dataBattle.armies) {
            console.log(
              "армия противника уничтожена,осталось " + this.armies.length
            );
          }
          console.log("--------------------------------------");
        }
      }

      if (this.armies.length === 1) {
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
