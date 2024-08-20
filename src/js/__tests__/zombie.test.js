import Zombie from '../zombie';

test('should create a Zombie character with correct properties', () => {
    const zombie = new Zombie('Walker');

    expect(zombie.name).toBe('Walker');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });

  test('should throw an error if name is not a string', () => {
    expect(() => new Zombie(123)).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is less than 2 characters', () => {
    expect(() => new Zombie('W')).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is more than 10 characters', () => {
    expect(() => new Zombie('SuperLongName')).toThrow('поле name не соответствует заданным правилам');
  });