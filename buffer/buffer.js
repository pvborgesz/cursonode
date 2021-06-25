const Buffer = require('buffer').Buffer

const buf = Buffer.from(" Curso completo de Node JS")

console.log(buf.toString())

const buf_string = Buffer.from('Carregando uma string', 'utf-8')


console.log(Buffer.isBuffer(buf_string))

console.log(buf_string.toString());
console.log(buf_string.toString('utf-8', 0, 10))

