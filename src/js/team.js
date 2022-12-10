export default class Team {
  constructor() {
    this.current = 0;
    this.team = [];
  }

  addPerson(char) {
    this.team.push(char);
    return this;
  }

  [Symbol.iterator]() {
    const characters = this.team;
    const last = characters.length;
    return {
      next: () => {
        if (this.current < last) {
          const currentValue = characters[this.current];
          this.current += 1;
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
