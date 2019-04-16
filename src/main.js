import fs from 'fs';
import { Battle } from "./core/battle";
import { Soldier } from '../models/soldier';
import { SoldierFabric } from './fabrics/soldierFabric';
import data from "../data/data.json"

data = JSON.parse(data)

export class Application {
  async init() {
    let json = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));

    let test = SoldierFabric.getInstance(100, 500);

    console.log(test)
    const battle = new Battle(json.armies);
    battle.start();
  }
}
