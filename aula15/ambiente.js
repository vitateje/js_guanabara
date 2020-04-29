// ARRAY

let num = [5, 8, 9] // ARRAY - LISTA - COLEÇÕES

num[0] = 3 // Insere o numero na posição 0

num.push(7, 10, 45) // Adiciona um novo elemento no final do array

console.log(num.length) // Tamanho Array

num.sort() // Ordena Lista


// For com Passo

for( let pos = 0 ; pos<num.length ; pos++){
console.log(num[pos])}

// Iteration

for (x in num){
    console.log(num[x])
}

let pos = num.indexOf('abacate') // Retorna a posição de um elemento

console.log(pos)
