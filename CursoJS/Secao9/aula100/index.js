const fs = require('fs') //manipula os arquivos
const path = require('path') //manipula o caminho do arquivo

const arquivos = fs.readdirSync(path.resolve(__dirname, "..",".."))
ListarSubArquivos(arquivos, path.resolve(__dirname, "..",".."))

async function ListarSubArquivos(arquivos, pathDir){
  for (let arquivo of arquivos){
    const fileFullPath = path.resolve(pathDir, arquivo) // contem a pasta atual dependendo do arquivo
    console.log(fileFullPath)
    const stats = await fs.statSync(fileFullPath) //usa a função dos arquivos
    if (/\.git/g.test(fileFullPath)) continue //ignora pasta com o .git
    if (/node_module/g.test(fileFullPath)) continue //ignora pasta com o node

    if (stats.isDirectory()){
      const subArquivos = fs.readdirSync(fileFullPath)
      ListarSubArquivos(subArquivos, fileFullPath);
      continue
    }

    if (!/\.css$/g.test(fileFullPath)) continue // só exibe arquivos do tipo css
    
    console.log(fileFullPath)
  }
}
