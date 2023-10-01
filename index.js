function hiddenPass(){
    let inputSenha = document.getElementById("senha")
    let atributo = inputSenha.getAttribute("type")
    if (atributo == "password"){
        inputSenha.setAttribute("type", "text")
    }
    else{
        inputSenha.setAttribute("type", "password")
    }
}