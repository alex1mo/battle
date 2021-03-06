import { Battle } from "./core/battle";
import { Factory } from "./factory/factory";
import data from "../data/data.json";

export class Application {
  async init() {
    let factory = Factory.getInstance();
    let armies = factory.createArmies(data.armies);

    const battle = new Battle(armies);

    if (battle.armies.length > 2) {
      battle.start();
    } else {
      console.log("участников битвы должно быть больше 1");
    }
  }
}
