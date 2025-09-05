// Função declarativa
function saudacao(nome) {
    return `Olá, ${nome}!`
}

console.log(saudacao("Rayssa"))


// Função anônima
const soma = function(a,b) {
    return a + b;
}

console.log(soma(5,3))
console.log(soma(10,20))
console.log(soma(-1,1))

// Função arrow 
const multiplicar = (a,b) => a * b;
console.log(multiplicar(5,3))
console.log(multiplicar(10,20))
console.log(multiplicar(-1,1))

// Mesma coisa que a função de cima
function multiplicarDeclarativa(a,b){
    return a * b;
}

function simples(){
let a = 5
let b = 12
let c = a + b

}
console.log("O valor de c é: " + c)

function somar (a,b){
    return a + b;
}

console.log( somar(5,10))


// Função declarativa 
function cumprimentar(nome2= "Rayssa"){
    return`Olá, ${nome2}! Como você está?`

}

// Função auto-invocada
(function(){
    console.log("Função auto-invocada");
})();

// Função callback
function processar(valor, callback){
    const resultado = callback(valor);
    console.log(`Resultado:${resultado}`);
}

// Função assíncrona
 async function processarAsync(valor,callback){
        const resultado = await callback(valor);
        console.log(`Resultado:${resultado}`);
}