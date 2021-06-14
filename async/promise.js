function soma(x){
    return new Promise((resolve, reject)=>{// se der tuod errado, reject, se der tudo certo, resolve
        setTimeout(()=>{
            resolve(x+5000);
        }, 3000);
    })
}

// nao precisa de callback
soma(300).then((resultado)=>{
    console.log('Resolvido, Resultado: ',resultado);
}); //.then significa que deu tudo certo
//.catch() significa que nao deu certo