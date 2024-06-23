//npm init -y cria o package.json
//npm install express caixa de ferramentas para configurar o servidor
//npm install socket.io instalar a ferramenta para manter uma comunicação aberta com o servidor

const http = require('http');
const express = require('express'); // é uma função
const { Console } = require('console');
const aplicacao = express()


const servidorHttp = http.createServer(aplicacao)
const io = require('socket.io')(servidorHttp /*Apica as funções no nosso servidor*/) // Deixa uma comunicação aberta no servido

io.addListener('connection', (socket) => {
  console.log("Um usuário conectou")
  socket.addListener('nova mensagem', (msg) =>{
    io.emit('nova mensagem', msg); //emite a mensagem para todos os usuários usando o servidor
  }) // Escuta o evento do usuário
}) //assim que o usuario acessa o servidor, é criado uma conexão aberta com o usuário


aplicacao.use(express.static('public')) //Fornece os arquivos, html, css para quem requisitou, passa a pasta de arquivos


servidorHttp.listen(1000, '192.168.0.111' /*configura o ipv4 para ser usado por vários dispositivos na mesma rede */) // configura em qual porta o servidor vai estar escutando
//(caso seja linux)sudo node --watch ./servidor.js - roda o servidor