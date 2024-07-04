const express = require('express')
const app = express()

app.get("/", (req,res) =>{
  res.send("Hello, world!")
})

app.get("/form", (req, res)=>{
	res.send(
	`<form action="/form" method="POST">
		Nome: <input type="text" name="nome">
		<button type="submit">Enviar</button>
	</form>`)
})

app.post("/form", (req, res) =>{
	res.send("Recebido")
})




app.listen(3000, () =>{
	console.log("Acessar http://localhost:3000")
	console.log("Servidor executando na porta 3000")
})