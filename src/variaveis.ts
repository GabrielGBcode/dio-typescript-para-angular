// variavéis

let ligado: boolean = false;
let nome: string = "Fernando";
let idade: number = 21;
let altura: number = 1.7;

let nulo: null = null;
let indefinido: undefined = undefined;

let retorno: void;
let retornoView: any =
  "Pode retornar o que for (number, string, boolean, null, undefined, void)";

// Object

let pessoa: object = {
  name: "Gabriel",
  cidade: "BH",
  idade: 20,
};

type produtoLoja = {
  nome: string;
  preco: number;
  unidade: number;
};

let meuProduto: produtoLoja = {
  nome: "Tênis",
  preco: 89.99,
  unidade: 5,
};

// array

let dados: string[] = ["Gabriel", "Ana", "Guilherme"];
let dados2: Array<string> = ["Gabriel", "Ana", "Guilherme"];

let infos: (string | number)[] = ["Aoba, bão?", 2];

// tuplas

let boleto: [string, number, number] = ["Água Mineral", 2.99, 321245152];

dados.pop();

// datas

let aniversario: Date = new Date("2023-09-05 16:14");
