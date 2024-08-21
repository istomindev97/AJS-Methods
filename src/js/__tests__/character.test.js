import Character from '../character';

describe('Character', () => {
  test('should create a Character with valid name and type', () => {
    const character = new Character('Hero', 'Bowman');
    const expected = {
      name: 'Hero',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: undefined,
      defence: undefined
    };
    expect(character).toEqual(expected);
  });

  test('should throw error for invalid name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('поле name не соответствует заданным правилам');
    expect(() => new Character('AVeryLongName', 'Bowman')).toThrow('поле name не соответствует заданным правилам');
    expect(() => new Character(123, 'Bowman')).toThrow('поле name не соответствует заданным правилам');
  });

  test('should throw error for invalid type', () => {
    expect(() => new Character('Hero', 'Warrior')).toThrow('поле type не соответствует заданным правилам');
    expect(() => new Character('Hero', 123)).toThrow('поле type не соответствует заданным правилам');
  });

  test('should level up character correctly', () => {
    const character = new Character('Hero', 'Bowman');
    character.attack = 10;
    character.defence = 10;
    character.levelUp();
    const expected = {
      name: 'Hero',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 12,    // 10 + 20% of 10
      defence: 12    // 10 + 20% of 10
    };
    expect(character).toEqual(expected);
  });

  test('should not level up if health is 0', () => {
    const character = new Character('Hero', 'Bowman');
    character.health = 0;
    expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
  });

  test('should apply damage correctly', () => {
    const character = new Character('Hero', 'Bowman');
    character.attack = 10;
    character.defence = 10;
    character.damage(20);
    const expected = {
      name: 'Hero',
      type: 'Bowman',
      health: 82,  // 100 - (20 * (1 - 0.1)) = 100 - 18 = 82
      level: 1,
      attack: 10,
      defence: 10
    };
    expect(character).toEqual(expected);
  });

  test('should not apply damage if health is below 0', () => {
    const character = new Character('Hero', 'Bowman');
    character.health = -1;  // Задаем здоровье ниже нуля
    expect(() => character.damage(20)).toThrow('Мертвее уже не будет');
  });
});
