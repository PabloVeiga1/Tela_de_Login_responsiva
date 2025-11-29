const input1 = document.getElementById('username');
const input2 = document.getElementById('password');
const btn_login = document.querySelector('.btn-login');

 document.getElementById("meuForm").addEventListener("submit", function(e) {
    e.preventDefault();
  });

btn_login.addEventListener('click', () =>{
    if(input1.value === "pablocostaveiga@gmail.com" && input2.value === "deusetudo@123"){
        window.alert("Login realizado com sucesso!");
    }
    else{
        window.alert("Usuário ou senha incorretos!");
}
});
