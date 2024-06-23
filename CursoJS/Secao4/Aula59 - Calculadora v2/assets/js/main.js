function Calculadora(){
  const display = document.querySelector(".display")


  this.iniciar = () => clickBtns();

  const clickBtns = () => {
    document.addEventListener("click", function(e){
      const el = e.target;

      if (el.classList.contains("btn-num")){
        btnParaDisplay(el.innerText);
      }else if (el.classList.contains("btn-clear")){
        clearDisplay()
      }else if (el.classList.contains("btn-del")){
        deleteUm()
      }else if (el.classList.contains("btn-eq")){
        resultado()
      }
    })

  }


  const resultado = () => {
    try{
      const conta = eval(display.value)
      display.value = conta
    }catch(e){
      display.value = "Error"
      setTimeout(function(){
        display.value = ""
      },1000)
    }
  }

  const btnParaDisplay = (valor) => display.value += valor

  const clearDisplay = () =>display.value = "";

  const deleteUm = () => display.value = display.value.slice(0, -1)

}

const calculadora = new Calculadora()
calculadora.iniciar()