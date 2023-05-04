
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
//condicional ternaria


let membro = true
let promocao = membro ? 20 : 0;

console.log(promocao);

// outro exemplo

console.log(membro ?"voce e membro" : "voce nao e membro");
console.log("desconto aplicado"+ " " + promocao);

// #20 switch

let proficao = "medico";

switch(proficao){
    case 'medico':
    console.log("uniforme branco")
    break;

    case 'pedreiro':
        console.log("sem uniforme")
    break;

    case 'policial':
        console.log("portar a quad")
    break;

    default: // se caso nenhuma for satisfeita esse "padrao" sera usado
        console.log("uniforme padrao")
        break;
}

// java escrip basico #4 passando parametros de funcoes


function operador (n1,n2 ){// essas variavei n1 e n2 só existe dentro dessa função , agr cabe a voce atribuir valor a elas
    resultado = n1+n2;
    console.log("esse e o resultado"+ resultado);

}
operador(10,12);
operador(25,55); // aki voce ja roda a funçaõ pronta


//armazenando valor da function

function nomeCompleto(ex1,ex2){
    return ex1 + ex2;
}

let resultado = nomeCompleto(12,15);
console.log(resultado);


// funçaõ com retorno condicional


function aprovado(idade){
    if(idade >= 18){
        return true;
    }else {
        return false;
    }
} 
let idade = 19;

let idadeCompleta = aprovado(idade);

if (idadeCompleta === true){
    console.log("voce e adulto")
}

if (idadeCompleta === false){
    console.log("voce e menor de idade")
}
// segundo jeito de fazer

function aprovado(idade){
    if(idade >= 18){
        return true;
    }else {
        return false;
    }
} 
let idade = 19;

let idadeCompleta = aprovado(idade);

if (idadeCompleta === true){
    console.log("voce e adulto")
}else{
    console.log("menor de idade")
}
//exercicio

function calcularValorImovel(quartos,metragem){
    let m2 = 3000;
    let preco = 0;

    switch(quartos){
        case 1:
            default:
            preco = metragem * m2;
           
        break;

        case 2:
            preco = metragem * (m2 * 1.3);
        break;

        case 3:
            preco = metragem * (m2 * 1.5);
        break;

    }
    return preco;
}
let quartos = 3;
let metragem = 200;

let valorFinal = calcularValorImovel(quartos,metragem);
console.log(valorFinal);


// validando senhas

function validarUsuario(usuario,senha){
    if(usuario === 'pedro' && senha === '123'){
       
        return true; 
    }else{
        
        return false; 
    }
}

let usuario = 'pedro';
let senha = '123';

let validando = validarUsuario(usuario,senha);

if (validando === true){
    console.log("login efetuado")
} else{
    console.log("senha ou usuario errado");
}



// arrow function




const calclucros = (on,instalacao,trabalhos) => {

    let valortotal = 0;

    if(on === true){

        valortotal = (instalacao + trabalhos) * 1.2;
        return valortotal;

    }else {
        valortotal = "nao trabalhou vagal"
        return valortotal;
    }


}

let on = true;
let instalacao = 110;
let trabalhos = 15;

let lucros = calclucros(on,instalacao,trabalhos);
console.log("lucros totai:" + lucros);


// variaveis dentro e fora de funcoes
// se tiver uma valiavel fora da funcao com o nome "exemplo " esse variavel e global e voce pode utilizar ela  dentro da funcao ,
//porem se vc criar outra variavel com o nome exemplo dentro da funcao , entao ela se torna local e so vai poder ser usada dentro da funcao
/////--------------//--------------------/////-----------------------------///--------------------------------------------------------------------




//funcao dentro de funcao


const raix = (x)=>{

    return x * x;
}
function somar (a,b){

   let rai1 = raix(a);
   let rai2 = raix(b);
   return rai1 + rai2;
}
console.log(somar(5,5))

// exemplo 2

function somar (a,b){

    const raix = (x)=>{

        return x * x;
    }

    let rai1 = raix(a);
    let rai2 = raix(b);
    return rai1 + rai2;
 }
 console.log(somar(5,5))

// array

let colors = ['blue','green','black','nando','jose' ]

console.log(colors[1]);

// exemplo 2 array dentro de outro array


let colors = ['blue','green','black',['nando','jose']] //array dentro de outro array para acessar voce faz o seguinte
//voce seleviona a posicao do array e dps a posicao do inten dentro do array

console.log(colors[3][0]);


//operacoes basicas no array

//length = mostra a quantidade de coisas que existe dentro desse array
// push() acrescenta iten dentro do array

let array = ['arroz','feijao','salada'];

array.push('macarrao'); // dessa forma voce adiciona o inten no array
array.pop(); //remove o ultimo iten adicionado
array.shift();//remove o primeiro iten do array

console.log(array.length);


//oque sao objetos

let personagem = { // essa e a chave do objeto '{'
    nome:'fernando',
    idade:90,
    pai:'brasil',
}

console.log( personagem.nome +'tem '+ personagem.idade +'anos'  );//dessa forma vc puxa dados do objeto

//objeto  dentro de objeto

let personagem = { 
    nome:'fernando',
    idade:90,
    pai:'brasil'

    caracteristicas:{
        forca:20,
        magia:5,
        stamina:15
    }
}

console.log(personagem.caracteristicas.forca)

//acessando e alterando objeto

let personagem = { 
    nome:'fernando',
    idade:90,
    pai:'brasil' 

    olhos['preto','azul']

    caracteristicas:{
        forca:20,
        magia:5,
        stamina:15
    }
}



personagem.nome = 'pedro';// troquei o nome
personagem.caracteristicas.forca += 5; // nesse caso eu adicionei 5

personagem.olhos.push('verde')// adicionei um atributo no array dentro do objeto

console.log(personagem.caracteristicas.forca);

// parei na aula 17 favor voltar nelaS










