import Magician from '../magician';

test('should create a Magician character with correct properties', () => {
    const magician = new Magician('Merlin');

    expect(magician.name).toBe('Merlin');
    expect(magician.type).toBe('Magician');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('should throw an error if name is not a string', () => {
    expect(() => new Magician(123)).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is less than 2 characters', () => {
    expect(() => new Magician('M')).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is more than 10 characters', () => {
    expect(() => new Magician('SuperLongName')).toThrow('поле name не соответствует заданным правилам');
  });