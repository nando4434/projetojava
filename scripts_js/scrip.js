


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


// aula 17 acessando e alterando dados do objeto

let personagem = { 
    nome:'fernando',
    idade:90,
    pai:'brasil' ,

    olhos:['preto','azul'],

    caracteristicas:{

        forca: 20 ,
        magia: 5,
        stamina: 15,

    }
}

personagem.olhos[1] = 'preto'
console.log(personagem.olhos[1])

personagem.caracteristicas.forca += 5; // acrescentei o valor

console.log(personagem.caracteristicas.forca)

//acessando arrays dentro do objeto

let gangue = {
    nome:'malandros',
    numero:4,
    carros:[
        {modelo:'fiat', cor: 'preto'},// cada chave representa 1 objeto
        {modelo:'ford', cor: 'azul'},
        {modelo:'chevrole', cor: 'cinza'},
        {modelo:'jaguar', cor: 'vermelho'},

    ]
}


console.log(gangue.carros[1]);// dessa maneira voce acessa os itens do array que esta dentro do objeto 
console.log(gangue.carros[3].cor);
console.log(gangue.carros[2].modelo);


// funcao dentro de objeto

let pessoa= {
    nome :'fernando',
    idade:26,
    sobreNome:'silva',
    nomeCompleto:function(){
        return this.nome + this.sobreNome //this ele pega a funcao atua em que ele se encontra e atravez disso voce encontra as variaveis e funcoes e arrayz,etc
    }
}
console.log(pessoa.nomeCompleto());

//loop for
// N = inicio do contador
//N =<10 se n for menor que 10 , entao continue executando
// N++ ACRESCENTA 1 EM CADA VEZ QUE ELE DAR UMA VOLTA

for(let n = 0;n <3 ;n++){
    console.log(n)
}






let numero = 0;

while(numero < 10){ // enquanto o numero for menor que 0 esse codigo vai ficar executando 
    console.log('esse e o numero'+numero)
    numero++; // acrescenta um numero cada vez que o codigo for executado
}

let fruit = ['maca','goiaba','pera','maca','goiaba','pera'];
for (let x in fruit) {
    console.log(fruit[x]);

}

let number = 0 ;

while(number <= 100){
    console.log(number)
    number++
}

// funcoes de array 

let frutas = ['maca','goiaba','pera','maca','goiaba','pera']
 frutas.push('jamanta'); // adiciona item no array
 frutas.pop();//remove o ultimo item no array
 frutas.shift();//remove o primeiro item no array
 console.log(frutas);


 //ordenacoes de arrays



 let fruitss = ['maca','goiaba','pera','maca','goiaba','pera'];

 fruitss.sort()// ele ordena de forma crescente 
 fruitss.reverse()// ele reverte ou seja combinado com o sort voce deixa de forma crescente e quando ele inverte vira decrescente


 let cars = [
    {brand:'fiat',year:2002},
    {brand:'honda',year:2029},
    {brand:'mercedez',year:1996},
    {brand:'bmw',year:2000},
 ]
  // o sort consegue ser usado para pegar valores dentro de arrays e e possivel usalo como especie de funcao para alterar diratamente o array


  cars.sort( (a,b) =>{ // criar uma funcao dentro do sort
    if(a.year > b.year){// nesse caso o a representa o primeiro indice e b o segundo indice 
        return 1; // ou seja ele adianta uma casa 'indice' no array alterando a ordem que ele esta
    }else if (a.year < b.year){
        return - 1 ; //retrocede a casa dessa forma eles vao se ajustando ate que a ordem fique do menor para o maior ou maior para o menor

    } else{
        return 0; // caso esteja na posicao corre ele nao altera a posicao
    }
  }
  )
  // esse codigo vai rodar varias vezes pegando todos os itens em 2 em 2 ate organizar tudo e deixar na ordem

  console.log(cars)
  let fruits = ['pera', 'melancia', 'tomate','uva'];


  //iteracao de array 1

  //filter() ele vai filtrar aqui que vc determinar

  let bigfruits = fruits.filter((item)=>{// voce deve guardar as informacoes filtradas dentro de uma variavel // ele selecionou o fruit com o filter apartir desse ponto o length esta pegando diretamente o item de cada indice
    return item.length > 4; // ele ira passar cada item passar por eles , ver quantas letras tem e verificar se e maior que 3 letras
    }
  )

console.log(bigfruits)

/* every() retorna valor booleano verdadeiro ou falso ela so 
retorna verdadeiro se todas as condicoes que vc fez dentro dela 
for verdadeira */

let ok = fruits.every((b)=>{ // aqui ele ta verificando se todas as frutas temais que 3 letras
    return b.length >3;
}
)
if(ok == true){
    console.log('TODOS TEM MAIS QUE 3 LETRAS')
}else{
    console.log(' nao sao todos que tem mais de 3 letras')
}

// some ' algum ' ele tambem retorna valor booleano porem ele retorna true se algum valor satisfazer a condicao , nao precisa ser todas as condicoes satisfeita

let ok = fruits.some((b)=>{ // aqui ele ta verificando se todas as frutas temais que 3 letras
    return b.length >3;
}
)
if(ok == true){
    console.log('TODOS TEM MAIS QUE 3 LETRAS')
}else{
    console.log(' nao sao todos que tem mais de 3 letras')
}

// includes ele ira procurar aquele item dentro do array
 
if(fruits.includes('uva')){
    console.log('tem uva')
}else{
    console.log('nao tem uva')
}
