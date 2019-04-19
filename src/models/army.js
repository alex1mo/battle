export class Army {
  constructor(name, strategy, squads) {
    this.name = name;
    this.strategy = strategy;
    this.squads = squads;
  }

  getTargetArmy() {}

  isAlive() {
    return this.squads.some(e => e.isAlive());
  }

  getSquads() {
    this.squads = this.squads.filter(e => e.isAlive());
  }
}
