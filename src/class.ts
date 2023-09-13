// classes

/*
  data modifiers
  public
  private
  protected
*/

// Character: superclass
class Character {
  protected name?: string;
  strengh: number;
  skill: number;

  constructor(name: string, strengh: number, skill: number) {
    this.name = name;
    this.strengh = strengh;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack with ${this.strengh} points`);
  }
}

// Magician: subclass
class Magician extends Character {
  magicPoints: number;
  constructor(
    name: string,
    strengh: number,
    skill: number,
    magicPoints: number
  ) {
    super(name, strengh, skill);
    this.magicPoints = magicPoints;
  }
}

const player1 = new Character("Kratos", 10, 98);
const player2 = new Magician("Mago", 5, 30, 99);

player1.attack();
console.log(player1);
