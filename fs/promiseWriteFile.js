const {writeFile} = require('fs')

function criaArquivo(name, content){
    return new Promise((resolve,reject)=>{
        writeFile(name, content, err=>{
            if(err) throw reject(err)
            resolve()
        })
    })
}

criaArquivo('promiseArquivo.txt','Criando um arquivo utilizando promise')
.then(()=>{'Arquivo promiseArquivo.txt criado com sucesso' })
.catch(err=>{ console.log(err)})