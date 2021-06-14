const fs = require('fs');
const assets = ['css', 'js', 'images', 'fonts', 'lib']

function make(dir){
    dir.forEach((item)=>{
        fs.mkdir(`projeto/assets/${item}`, {recursive: true},(err)=>{//recursive é  usado pra criar uma subpasta
            if(err) throw err;
            console.log("diretorio criado com sucesso:", item);
        });
          
    })
}

make(assets);