let email = "marcos.veloso@sempreceub.com";

email = "marcosveloso11@gmail.com";

console.log(email);
console.log("O seu e-mail é: " + email);
console.log(`O seu e-mail é: ${email}`);

document.querySelector("#form-login").addEventListener("submit", e=>{

    e.preventDefault();     //cancelando o comportamento padrao do formulário de enviar a outra pagina quando clica no botao

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    //console.log(email, password); //essa forma para poder pegas somente o e-mail e a senha do usuário

    let json = {
        email: email,   //mesma coisa debaixo caso a variavel tenha o memso nome da propriedade ====== variavel do lado direito
        password
    };

            // //PARA MOSTRAR O QUE FOI INSERIDO NOS CAMPOS
            // console.log(json);

            // //transformando JSON em string ===== linha abaixo do objeto do JSON
            // let stringJSON = JSON.stringify(json);

            // console.log(stringJSON);
            // //FIM PARA MOSTRAR O QUE FOI INSERIDO NOS CAMPOS
   
            
    //SABER SE O CAMPO FOI PREENCHIDO - deve ser realizado isso para que o usuário não burle apagando o required no HTML
        if(!json.email) {   //o ! significa não, ou seja, caso não seja preenchido
        
            console.error("O campo deve e-mail ser preenchido!");

        } else if (!json.password) {

            console.error("O campo deve password ser preenchido!");
        
        } else {

            console.info("Dados validados com sucesso!");
            
        }
});