import { random } from "../helper/helper";

export class Strategy {
  static random(armies, attackArmy) {
    let attackSquad =
      attackArmy.squads[random(0, attackArmy.squads.length - 1)];
    let defArmy = this._randomDefArmy(armies, attackArmy);
    let defSquad = this._randomDefSquad(defArmy);

    return {
      attackSquad,
      defArmy,
      defSquad
    };
  }

  static weakest(armies, attackArmy) {
    let attackSquad =
      attackArmy.squads[random(0, attackArmy.squads.length - 1)];
    let defArmy = this._weakestArmy(armies, attackArmy);

    let defSquad = this._randomDefSquad(defArmy);

    return {
      attackSquad,
      defArmy,
      defSquad
    };
  }

  static strongest(armies, attackArmy) {
    let attackSquad =
      attackArmy.squads[random(0, attackArmy.squads.length - 1)];
    let defArmy = this._strongestArmy(armies, attackArmy);

    let defSquad = this._randomDefSquad(defArmy);

    return {
      attackSquad,
      defArmy,
      defSquad
    };
  }

  static _randomDefArmy(armies, attackArmy) {
    while (true) {
      var defArmy = armies[random(0, armies.length - 1)];
      if (attackArmy !== defArmy) {
        break;
      }
    }
    return defArmy;
  }

  static _randomDefSquad(defArmy) {
    let defSquad = defArmy.squads[random(0, defArmy.squads.length - 1)];
    return defSquad;
  }

  static _weakestArmy(armies, attackArmy) {
    let defArmy = this._randomDefArmy(armies, attackArmy);
    armies.forEach(e => {
      if (e === attackArmy) return;
      if (e.squads.length < defArmy.squads.length) {
        defArmy = e;
      }
    });
    return defArmy;
  }

  static _strongestArmy(armies, attackArmy) {
    let defArmy = this._randomDefArmy(armies, attackArmy);
    armies.forEach(e => {
      if (e === attackArmy) return;
      if (e.squads.length > defArmy.squads.length) {
        defArmy = e;
      }
    });
    return defArmy;
  }
}
