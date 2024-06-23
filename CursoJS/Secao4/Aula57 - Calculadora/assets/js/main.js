function criaCalculadora(){

  return {
    display: document.querySelector(".display"),

    inicia(){
      this.clickBtns()
    },

    clickBtns(){
      document.addEventListener("click", function(e){
        const el = e.target;

        if (el.classList.contains("btn-num")){
          this.btnParaDisplay(el.innerText);
        }else if (el.classList.contains("btn-clear")){
          this.clearDisplay()
        }else if (el.classList.contains("btn-del")){
          this.delete()
        }else if (el.classList.contains("btn-eq")){
          this.resultado()
        }
      }.bind(this))
    },

    resultado() {
      try{
        const conta = eval(this.display.value)
        this.display.value = conta
      }catch(e){
        this.display.value = "Error"
        setTimeout(function(){
          this.display.value = ""
        }.bind(this),1000)
      }
    },

    btnParaDisplay(valor){
      this.display.value += valor
    },

    clearDisplay(){
      this.display.value = "";
    },

    delete(){
      this.display.value = this.display.value.slice(0, -1)
    }


  };
}

const calculadora = criaCalculadora();
calculadora.inicia()