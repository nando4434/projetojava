let nome ="fernando";
let idade = 26;


let string = "fernando";
let number = 30;
let booleano = true;
let arrey = ["ovo","farinha","leite"];
let objeto = {nome:"fernando",idade:26};


/* exercicios*/
let carro = "ferrari";
let bolo = 25;
let endereco = "rua 3";

console.log("nome do carro", carro);
console.log("preco do bolo", bolo);
console.log("endereco", endereco);

/* aula 10# */

let nando = "fernando"; // e utilizada dentro do contexto que foi criada
var nand0 = "fernando"; // funciona em qualquer contexto pondendo ser usada em outras variaveis
const nand1 = "fernando";// essa variavel se torna contante , nao pode ser alterada

var chefe = "silvio";
console.log("nome do chefe", chefe);

// proxima aula #11


let  nomes = "fernando";
let sobreNome = "silva";

let nomeCompleto = ` ${nome} ${sobreNome } idade 90`; //template string
console.log(nomeCompleto);

// condicional if /else

let idade13 = 50;



if (idade13 >= 60){

    console.log("idoso");
} 
else{
    console.log("flor da idade");
}

//condicional == e === #14


let teste = 20;

if (teste == "20"){
    console.log("funcionou");
}

// ele faz uma leitura nao tao restrita , esse exemplo executou apeas 
// dele ser um int misturado com string

let teste2 = 20;

if (teste2 === "20"){
    console.log("nao funciona");
}
else{
    console.log("nao funciona")
}
// dessa maneira ele é mais restrito mais rigorozo, mais exato