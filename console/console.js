console.log('Exibindo uma mensagem no console!')

//erro

console.error(new Error('Exibindo mensagem de erro,temos problemas!'))

const carros = ['GM', "Fiat", "Ford", 'VW', "renault", 'honda', 'hyundai']

console.table(carros)

const dados = {name: "Paulo Victor Borges", empresa: "Pv informática"}

console.table (dados)

console.count('processo')
console.count('processo')
console.count('processo')

console.log("Resetando o processo")
console.countReset('processo')
console.count('processo')

console.time('contador')
for (let index = 0; index < 100; index++) {
   // console.log("-")
}
console.timeEnd('contador')

console.assert(true,'Faça alguma coisa')

console.assert(false,'Ih, rapaz, %s, que pena!', 'Não Funcionou')

// console.clear() // limpa o console

