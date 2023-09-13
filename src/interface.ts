// interfaces (type x interfaces)

type robot = {
  readonly id: number | string;
  name: string;
};

interface robot2 {
  readonly id: number | string;
  name: string;
  sayHello(): string;
}

const bot1: robot = {
  id: 1,
  name: "Megamente",
};

const bot2: robot2 = {
  id: 1,
  name: "Megamente",
  sayHello: function (): string {
    return "Hello";
  },
};

// console.log(bot1);
// console.log(bot2);

class Pessoa implements robot2 {
  id: number | string;
  name: string;

  constructor(id: number | string, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return `Hello! I'm ${this.name}`;
  }
}

const p = new Pessoa(1, "Gabriel");
console.log(p.sayHello());
