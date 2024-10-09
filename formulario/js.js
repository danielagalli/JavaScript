const form = document.getElementById("form");
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordconfirmation = document.getElementById("passwor-confirmation")

form.addEventListener("submit", (event) => {
    event.preventDefault();

   checkInputUsername();
})

//VALIDANDO O NOME DO USUARIO DA NOVA CONTA

function checkInputUsername(){
    const usernameValue = username.value;

    console.log(usernameValue)
}