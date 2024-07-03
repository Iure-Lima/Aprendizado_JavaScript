const fs = require('fs')

module.exports = function (caminhoArquivo, dados){
  fs.writeFileSync(caminhoArquivo, dados, {flag:"w", encoding:"utf8"})
}


