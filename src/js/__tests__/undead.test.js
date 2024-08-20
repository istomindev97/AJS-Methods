import Undead from '../undead';

test('should create an Undead character with correct properties', () => {
    const undead = new Undead('Zombie');

    expect(undead.name).toBe('Zombie');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('should throw an error if name is not a string', () => {
    expect(() => new Undead(123)).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is less than 2 characters', () => {
    expect(() => new Undead('Z')).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is more than 10 characters', () => {
    expect(() => new Undead('SuperLongName')).toThrow('поле name не соответствует заданным правилам');
  });