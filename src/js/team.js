export default class Team {
  constructor() {
    this.team = [];
  }

  addPerson(char) {
    this.team.push(char);
    return this.team;
  }

  [Symbol.iterator]() {
    const characters = this.team;
    let current = 0;
    const last = characters.length;
    return {
      next() {
        if (current < last) {
          const currentValue = characters[current];
          current += 1;
          return {
            value: currentValue,
            done: false,
          }
        }
        return {
          done: true,
        }
      }
    }
  }
}
