

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

//aula 15

var idade15 = 12;

if(idade15 >= 20){
    if(idade15 < 60){ //ele só ira executar esse comamndo se a primeira condiçao for satisfeita
        console.log("voce e adulto");

    }

}

if (idadae >18 && idade <60){ //as duas condicoe devem sewr satisfeita
    console.log("ta otimo");
}

if(idade>-17 || idade<90){ // tag usada para "ou"
    console.log("ta bom tbm");
}


// condicional dupla if else
let nandera = 30;

if(nandera<18){
    console.log("!voce e criança")
} else if(nandera>18){
    console.log("!voce e adultoa")
} else if(nandera>68){
    console.log("!voce e idoso")
}

//*mais exemplos

let idade17 = 30;

let aduldo = idade>=18 && idade<60;

if(adulto){
    console.log("E ADULTO");
}
//parei na #19
