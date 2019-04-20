import { random } from "../helper/helper";

export class Strategy {
  static random(armies, attackArmy) {
    let attackSquad =
      attackArmy.squads[random(0, attackArmy.squads.length - 1)];
    while (true) {
      var defArmy = armies[random(0, armies.length - 1)];
      if (attackArmy !== defArmy) {
        break;
      }
    }
    let defSquad = defArmy.squads[random(0, defArmy.squads.length - 1)];

    return {
      attackSquad,
      defArmy,
      defSquad
    };
  }

  static weakest(armies, attackArmy) {
    let attackSquad =
      attackArmy.squads[random(0, attackArmy.squads.length - 1)];
    let defArmy = armies[0];

    armies.forEach(e => {
      if (e === attackArmy) return;
      if (e.squads.length < defArmy.squads.length) {
        defArmy = e;
      }
    });

    let defSquad = defArmy.squads[random(0, defArmy.squads.length - 1)];

    return {
      attackSquad,
      defArmy,
      defSquad
    };
  }

  static strongest(armies, attackArmy) {
    let attackSquad =
      attackArmy.squads[random(0, attackArmy.squads.length - 1)];
    let defArmy = armies[0];

    armies.forEach(e => {
      if (e === attackArmy) return;
      if (e.squads.length > defArmy.squads.length) {
        defArmy = e;
      }
    });

    let defSquad = defArmy.squads[random(0, defArmy.squads.length - 1)];

    return {
      attackSquad,
      defArmy,
      defSquad
    };
  }
}

// let attackArmy = armies[random(0, armies.length - 1)];
// let attackSquad = attackArmy.squads[random(0, attackArmy.squads.length - 1)];

// while (true) {
//   var defArmy = armies[random(0, armies.length - 1)];
//   if (attackArmy !== defArmy) {
//     break;
//   }
// }
// let defSquad = defArmy.squads[random(0, defArmy.squads.length - 1)];
