export const carregaForm = (req, res) => {
  res.send(
    `<form action="/" method="POST">
      Nome: <input type="text" name="nome">
      <button type="submit">Enviar</button>
    </form>`
  );
};
export const trasacao = (req, res) => {
  console.log(req.body);
};
