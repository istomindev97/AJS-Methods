export default class Character {
  constructor(name, type) {
    const allowedTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('поле name не соответствует заданным правилам');
    }

    if (typeof type !== 'string' || !allowedTypes.includes(type)) {
      throw new Error('поле type не соответствует заданным правилам');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp () {
    if (this.health != 0) {
      this.level++;
      this.attack = this.attack  + (this.attack  * 20 / 100);
      this.defence = this.defence  + (this.defence  * 20 / 100);
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100)
    } else {
      throw new Error('Мертвее уже не будет');
    }
  }
}