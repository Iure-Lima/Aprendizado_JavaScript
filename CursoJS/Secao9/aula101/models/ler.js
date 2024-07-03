const fs = require('fs')

module.exports = function (caminho){
  return fs.readFileSync(caminho, 'utf8')
}