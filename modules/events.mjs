const {EventEmitter} = require('events');

class Evento extends EventEmitter {}
const meuEvento = new Evento()

//subscriber - assinante
meuEvento.on('seguranca', (x,y)=>{
    console.log(`executando o evento 'seguranca': ${x} ${y}`)
})

// "on" a gente cria o evento 
//publisher - emissor
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário');
 
meuEvento.on('encerrar', (dados)=>{
    console.log("assinante: " +dados);
})

meuEvento.emit("encerrar", "encerrando a execução da importação dos dados")