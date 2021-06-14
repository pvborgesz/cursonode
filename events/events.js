const EventEmitter = require('events');

class Evento extends EventEmitter {}
const meuEvento = new Evento()

meuEvento.on('seguranca', (x,y)=>{
    console.log(`executando o evento 'seguranca': ${x} ${y}`)
})

// "on" a gente cria o evento 

meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário');
 