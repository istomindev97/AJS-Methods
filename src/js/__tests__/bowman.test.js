import Bowman from '../bowman';

test('should create a Bowman character with correct properties', () => {
    const bowman = new Bowman('Legolas');

    expect(bowman.name).toBe('Legolas');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('should throw an error if name is not a string', () => {
    expect(() => new Bowman(123)).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is less than 2 characters', () => {
    expect(() => new Bowman('L')).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is more than 10 characters', () => {
    expect(() => new Bowman('SuperLongName')).toThrow('поле name не соответствует заданным правилам');
  });