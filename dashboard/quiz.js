
function salvar() {
    // aguardar();

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var Pergunta1Var= Pergunta1.value;
    var Pergunta2Var= Pergunta2.value;
    var Pergunta3Var= Pergunta3.value;
    var Pergunta4Var= Pergunta4.value;
    var Pergunta5Var= Pergunta5.value;
    var Pergunta6Var= Pergunta6.value;
    var Pergunta7Var= Pergunta7.value;
    var Pergunta8Var= Pergunta8.value;
    var Pergunta9Var= Pergunta9.value;
    var Pergunta10Var= Pergunta10.value;

    if (senhaVar)
    if (Pergunta1Var == "" || 
        Pergunta2Var == "" ||
        Pergunta3Var == "" ||
        Pergunta4Var == "" ||
        Pergunta5Var == "" ||
        Pergunta6Var == "" || 
        Pergunta7Var == "" ||
        Pergunta8Var == "" ||  
        Pergunta9Var == "" || 
        Pergunta10Var == "" || 
        confirmacaoSenhaVar == "") {
        cardErro.style.display = "block"
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

        // finalizarAguardar();
    //     return false;
    }
    // else {
    //     setInterval(sumirMensagem, 5000)
    // }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            p1Server:Pergunta1Var,
            p2Server:Pergunta2Var,  
            p3Server:Pergunta3Var,
            p4Server:Pergunta4Var,
            p5Server:Pergunta5Var,
            p6Server:Pergunta6Var,
            p7Server:Pergunta7Var,
            p8Server:Pergunta8Var,
            p9Server:Pergunta9Var,
            p10Server:Pergunta10Var

        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            // cardErro.style.display = "block";

  alert ("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

            setTimeout(() => {
                window.location = "login.html";
            }, "2000")

            limparFormulario();
            // finalizarAguardar();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        // finalizarAguardar();
    });

    return false;
}
