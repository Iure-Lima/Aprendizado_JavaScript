// Modulo para trabalhar com caminho no node
const path = require('path');

//Exportação do arquivo para o uso em outros modulos
module.exports = {
  mode: 'development', //Configuração do modulo do webpack
  entry: './src/index.js', // Diz o arquivo inicial para o webpack
  output: {
    path: path.resolve(__dirname, 'public', 'assets','js'), //path da pasta 
    filename: 'bundle.js' //nome do arquivo a ser criado
  }, //Local onde os arquivos gerado por webpack são armazenados
  module:{
    rules: [{
      exclude: /node_modules/, // faz com que o webpack não analise essa pasta
      test: /\.js$/, // Testa se o arquivo é um arquivo javascript
      use:{
        loader:'babel-loader',
        options:{
          presets: ["@babel/env"]
        } //define as presets
      }//diz o loader que o webpack vai usar
    }] //Lista de regras para modulos

  }, //define os módulos
  devtool:'source-map' //Mapeia o arquivo original para quando ocorrer um erro
};