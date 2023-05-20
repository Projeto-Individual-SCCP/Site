function enviar() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var acertosVar = input_acertos.value;
    


    if (acertosVar == "") {
        // cardErro.style.display = "block"
        alert("ERRO");

        // finalizarAguardar();
        return false;
    }
    // else {
    //     setInterval(sumirMensagem, 5000)
    // }

    // Enviando o valor da nova input
    fetch("/quiz/enviar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            acertosServer: acertosVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            // cardErro.style.display = "block";

  alert ("Respostas enviadas com sucesso! Redirecionando para tela de Início...");

            setTimeout(() => {
                window.location = "dashboard.html";
            }, "2000")

            limparFormulario();
            // finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o envio das respostas...");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
    });

    return false;
}

// function sumirMensagem() {
//     cardErro.style.display = "none"
// }
function limparFormulario(){
    acertosVar = "";
        
}