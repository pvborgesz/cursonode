function soma(x, callback){
    return setTimeout(()=>{
        return callback(null, x+5000);
    }, 3000);
}

//callback fuction
function resolveSoma(err, resultado){
    if(err) throw err;  //if err == true (mesma coisa)
    console.log(resultado);
}

soma(200, resolveSoma);