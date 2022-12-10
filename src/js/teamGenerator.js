export default class TeamGenerator {
  constructor() {
    this.team = [];
  }

  addPerson(char) {
    this.team.push(char);
    return this.team;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.team.length; i += 1) {
      yield this.team[i];
    }
  }
}
