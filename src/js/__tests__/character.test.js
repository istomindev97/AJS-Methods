import Character from '../character';

test('should create character with valid inputs', () => {
  const char = new Character('Archer', 'Bowman', 25, 10);
  expect(char.name).toBe('Archer');
  expect(char.type).toBe('Bowman');
  expect(char.health).toBe(100);
  expect(char.level).toBe(1);
  expect(char.attack).toBe(25);
  expect(char.defence).toBe(10);
});

test('should throw error for invalid name', () => {
  expect(() => new Character('A', 'Bowman', 25, 10)).toThrow('поле name не соответствует заданным правилам');
  expect(() => new Character('ThisIsALongName', 'Bowman', 25, 10)).toThrow('поле name не соответствует заданным правилам');
});

test('should throw error for invalid type', () => {
  expect(() => new Character('Archer', 'InvalidType', 25, 10)).toThrow('поле type не соответствует заданным правилам');
});

test('should level up character when health is above 0', () => {
  const char = new Character('Archer', 'Bowman', 25, 10);
  char.levelUp();
  expect(char.level).toBe(2);
  expect(char.attack).toBe(30); // 25 + 20% = 30
  expect(char.defence).toBe(12); // 10 + 20% = 12
});

test('should throw error if trying to level up when health is 0', () => {
  const char = new Character('Archer', 'Bowman', 25, 10);
  char.health = 0;
  expect(() => char.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('should reduce health when taking damage', () => {
  const char = new Character('Archer', 'Bowman', 25, 10);
  char.damage(50);
  expect(char.health).toBe(55); // 100 - 50 * (1 - 0.1) = 55
});

test('should not reduce health below 0', () => {
  const char = new Character('Archer', 'Bowman', 25, 10);
  char.damage(200);
  expect(char.health).toBeLessThanOrEqual(0);
});

test('should throw error if trying to damage a dead character', () => {
  const char = new Character('Archer', 'Bowman', 25, 10);
  char.health = 0;
  expect(() => char.damage(50)).toThrow('Мертвее уже не будет');
});