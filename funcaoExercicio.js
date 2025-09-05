// Função declarativa idade
function idade(idade) {
    return `Minha idade é ${idade}!`
}

console.log(idade("19"))


//Função anônima altura
 const altura = function (a){
     return a;
}
console.log(altura(1.65))

// Funçao arrow Curso
const curso = (a) => a;
console.log(curso("Ciência da Computação"))

//Função para imprimir tudo
const receber=(cursoRecebe, alturaRecebe, idadeRecebe) => (cursoRecebe, alturaRecebe, idadeRecebe)

console.log(curso("Ciência da Computação")+ altura(1.65)+ idade(19))