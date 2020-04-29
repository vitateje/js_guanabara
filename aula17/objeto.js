// Estilo Dicionario


function emagrece(p=0) {
    this.peso -= p
    console.log(`Emagreceu ${p} kilos.`)
}

let amigo = {nome:'Vitor', ano_nascimento:1988, peso: 85.4,emagrece(), // atributos
engordar(p=0){ // métodos
    console.log('Engordou')
    this.peso += p
}}

console.log(amigo.peso)
amigo.engordar(2)
console.log(amigo.peso)
console.log(amigo.emagrece(4))


