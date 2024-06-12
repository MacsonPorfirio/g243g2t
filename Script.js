const btn = document.querySelector("#btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");

(()=>{
   let usuario = localStorage.getItem("usuario");
   if(usuario){
     window.location.href = "http://www.uol.com.br";
   }
})();

btn.onclick = (e) => {
     e.preventDefault();
    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if (!usuario && ! senha){
        inputUsuario.focus();
        return;
    }
    if (usuario === "Fernando"){
        if (senha === "abc"){
         localStorage.setItem("usuario", usuario);
            window.location.href = "https://www.oul.com.br";
        } else{
            inputUsuario.focus();
        }
    }
}