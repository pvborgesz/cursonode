console.log(`Nome do arquivo: `, __filename)
console.log(`Diretório do arquivo: `, __dirname)
console.log(`Sistema operacional: `, process.env.os)// retorna um array com todos os parametros de execução do arquivo;
console.log(`Sistema Nome do server: `, process.env.username)
console.log(`Nome do server: `, process.env.COMPUTERNAME)

console.log(process.argv[3])
console.log(`Ambiente do servidor: `, process.platform)
