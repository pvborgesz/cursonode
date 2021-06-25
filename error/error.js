

function execute(){
    executeTo()    
}
function executeTo(){
    throw new Error(' Ah não, deu erro! ')
}

function init(){
    //tente executar, se der erro, execute o catch imediatamente!
    try{    
        execute()
    } catch(e){
        console.log(`Temos um problema! ${e.message}`)
    }
}

init()
console.log(`Depois do erro ! `)