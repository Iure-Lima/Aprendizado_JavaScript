import GeraCPF from './models/GeraCPF';
import "./assets/css/style.css"

(function(){
  const gera = new GeraCPF()
  const cpfGerador = document.querySelector('.cpf-gerado')
  cpfGerador.innerHTML = gera.formatado(gera.geraNovoCPF())
})()