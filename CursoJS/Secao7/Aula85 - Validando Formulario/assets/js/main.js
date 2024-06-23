class ValidarFormulario{
  constructor(){
    this.form = document.querySelector("form");
    this.evento()
  }

  evento(){
    this.form.addEventListener("submit", (e) =>{
      this.handleSubmit(e);
    })
  }

  handleSubmit(e){
    e.preventDefault()
    
    const camposValidos = this.camposSaoValidos();
    const senhasValidar = this.senhasValidas()

    if (camposValidos && senhasValidar){
      alert("Formulario enviado")
      this.form.submit()
    }
  }

  camposSaoValidos(){
    let valido = true;
    
    for(let error of this.form.querySelectorAll(".error")){
      error.remove();
    }

    for (let campo  of this.form.querySelectorAll(".validar")){
      if (!campo.value){
        this.criaError(campo, `O campo ${campo.name} não pode estar vazio`)
        valido = false;
      }

      if(campo.id === "cpf"){
        if(!this.validaCPF(campo)) valido = false;
      }

      if(campo.id === "usuario"){
        if (!this.validaUsuario(campo)) valido = false; 
      }

    }


    return valido;
  }

  criaError(campo, error){
    let div = document.createElement("div");
    div.innerHTML = error;
    div.classList.add("error");
    campo.insertAdjacentElement("afterend", div)
  }

  validaCPF(campo){
    const cpf = new ValidadorCPF(campo.value);

    if (!cpf.validarCPF()){
      this.criaError(campo, `CPF Invalido`)
    }

    return cpf.validarCPF() || false;
  }

  validaUsuario(campo){
    const usuario = campo.value;
    let valid = true;

    if (usuario.length < 3 || usuario.length > 12){
      this.criaError(campo, "Usuário deve ter entre 3 e 12 caracteres")
      valid = false;
    }

    if (!usuario.match(/^[A-Za-z0-9]+$/g)){
      this.criaError(campo, "Usuário só pode conter letras e números")
      valid = false;
    }


    return valid;

  }

  senhasValidas(){
    let valid = true;

    const senha = this.form.querySelector("#senha")
    const repetirSenha = this.form.querySelector("#repetir-senha")

    if (senha.value !== repetirSenha.value){
      valid = false;
      this.criaError(senha, "Campo senha e repetir senha tem que ser iguais")
      this.criaError(repetirSenha, "Campo senha e repetir senha tem que ser iguais")

    }


    if (senha.value.length < 3 || senha.value.length > 12){
      valid = false;
      this.criaError(senha, "Senha deve ter entre 3 e 12 caracteres")
      
    }



    return valid;
  }
}





const valida = new ValidarFormulario()
