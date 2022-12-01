import Person from '../person';

test('setting up a new Person', () => {
  let person = {
    name: 'Маг',
    type: 'Magician',
    health: 70,
    level: 1,
    attack: 40,
    defence: 10
  };

  expect(new Person('Маг', 'Magician', 70)).toEqual(person);
});
