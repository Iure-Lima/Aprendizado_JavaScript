const containerParagrafos = document.querySelector('.paragrafos')
const paragrafos = containerParagrafos.querySelectorAll('p')

const backgroud = getComputedStyle(document.body).backgroundColor;

for (let p of paragrafos){
  p.style.background = backgroud;
  p.style.color = "white"
}