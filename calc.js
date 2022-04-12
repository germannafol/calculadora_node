const funcSomar = require("./functions/soma");

const funcSubtrair =require("./functions/subtracao");

const funcMutiplicar=require("./functions/mutiplicacao");

const funcDividir=require("./functions/divisao");

let a=2;
let b=4;

console.log(`soma: ${funcSomar(a,b)}, subtração: ${funcSubtrair(a,b)}, mutiplicação: ${funcMutiplicar(a,b)}, divisão: ${funcDividir(a,b)} `);
