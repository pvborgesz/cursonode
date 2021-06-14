function sum(x){
    return new Promise((resolve, reject)=>{// se der tudo errado, reject, se der tudo certo, resolve
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Ta de brincadeira')
        }
        setTimeout(()=>{
            resolve( x + 5000);
        }, 3000);
    })
}
async function main(){
    try{
       const resultado = await sum('#');
       console.log(`resultado com Async/Await ${resultado}`)
    }
    catch(error){
        console.log(`temos problemas: ${error}`)
        console.log(process.env.USERNAME)
    }
}   

main();