import { Battle } from "./core/battle";
import data from "../data/data.json";
import { Fabric } from "./fabrics/fabric";
import "./helper/helper.js";

export class Application {
  async init() {
    let fabric = Fabric.getInstance();

    const battle = new Battle();

    battle.start();
  }
}
