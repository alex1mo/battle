import { Strategy } from "../strategy/strategy";

export class Army {
  constructor(name, strategy, squads) {
    this.name = name;
    this.strategy = strategy;
    this.squads = squads;
  }

  getTargetArmy(armies) {
    switch (this.strategy) {
      case "random":
        return Strategy.random(armies, this);
      case "weakest":
        return Strategy.weakest(armies, this);
      case "strongest":
        return Strategy.strongest(armies, this);
    }
  }

  isAlive() {
    return this.squads.some(e => e.isAlive());
  }

  getSquads() {
    this.squads = this.squads.filter(e => e.isAlive());
  }
}
