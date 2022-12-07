import Person from '../person';
import Team from '../team';

const team = new Team(); team.addPerson(new Person('Лучник', 'Bowman', 50));
team.addPerson(new Person('Зомби', 'Zombie', 40));
const finalTeam = team.addPerson(new Person('Маг', 'Magician', 70));

test('team building', () => {
  expect(finalTeam[2]).toEqual({
    name: 'Маг',
    type: 'Magician',
    health: 70,
    level: 1,
    attack: 40,
    defence: 10
  })
});

team[Symbol.iterator]().next();

test('iterate team members', () => {
  expect(team[Symbol.iterator]().next()).toEqual({
    name: 'Зомби',
    type: 'Zombie',
    health: 40,
    level: 1,
    attack: 40,
    defence: 10
  });
});
