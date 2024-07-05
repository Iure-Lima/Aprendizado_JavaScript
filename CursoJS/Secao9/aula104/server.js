import express from 'express';
const app = express()

app.get("/", (req,res) =>{
  res.send("Hello, world!")
})


//app.get("/teste/:id_user?", (req, res) =>{
	//res.send(req.params.id_user)
	//console.log(req.query)
//})

app.get("/form", (req, res)=>{
	res.send(
	`<form action="/form" method="POST">
		Nome: <input type="text" name="nome">
		<button type="submit">Enviar</button>
	</form>`)
})

app.use(express.urlencoded({extended:true})) //permite receber os dados
app.post("/form", (req, res) =>{
	
	console.log(req.body) // pega o objeto completo enviado
	console.log(req.body.nome) // pega o valor do nome do objeto enviado
})




app.listen(3001, () =>{
	console.log("Acessar http://localhost:3000")
	console.log("Servidor executando na porta 3000")
})