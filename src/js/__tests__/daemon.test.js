import Daemon from '../daemon';

test('should create a Daemon character with correct properties', () => {
    const daemon = new Daemon('Inferno');

    expect(daemon.name).toBe('Inferno');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('should throw an error if name is not a string', () => {
    expect(() => new Daemon(123)).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is less than 2 characters', () => {
    expect(() => new Daemon('I')).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw an error if name is more than 10 characters', () => {
    expect(() => new Daemon('SuperLongName')).toThrow('поле name не соответствует заданным правилам');
  });