import TeamGenerator from '../teamGenerator';
import Person from '../person';

const team = new TeamGenerator();
team.addPerson(new Person('Лучник', 'Bowman', 50));
team.addPerson(new Person('Зомби', 'Zombie', 40));
team.addPerson(new Person('Маг', 'Magician', 70));

const gen = team[Symbol.iterator]();

test('iterate', () => {
  expect(gen.next().value).toEqual({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  });
  expect(gen.next().value).toEqual({
    name: 'Зомби',
    type: 'Zombie',
    health: 40,
    level: 1,
    attack: 40,
    defence: 10
  })
});
