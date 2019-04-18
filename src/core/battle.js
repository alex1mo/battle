import { random } from "../helper/helper";

export class Battle {
  constructor(armies) {
    this._armies = armies;
  }

  start() {
    // let armies = this.armies;
    // let battle = true;
    // while (battle) {
    //   let attackArmy = armies[random(0, armies.length - 1)];
    //   let attackSquad = attackArmy[random(0, attackArmy.length - 1)];
    //   let atackUnit = attackSquad[random(0, attackSquad.length - 1)];
    //   while (true) {
    //     let defArmy = armies[random(0, armies.length - 1)];
    //     if (attackArmy !== defArmy) {
    //       break;
    //     }
    //   }
    //   let defSquad = defArmy[random(0, defArmy.length - 1)];
    //   let defUnit = defSquad[random(0, defSquad.length - 1)];
    //   let attackSuccess = atackUnit.attackSuccess();
    //   let defSuccess = defUnit.attackSuccess();
    //   if (attackSuccess > defSuccess) {
    //     defUnit.damageRecivere();
    //   }
    //   battle = !battle;
    // }
  }

  get armies() {
    return this._armies;
  }

  set armies(v) {
    this._armies = v;
    return this._armies;
  }
}
