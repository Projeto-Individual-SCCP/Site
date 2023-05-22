
function enviar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertosServer;
   

    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Seus acertos está undefined!");
    }
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(acertos, porcentagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o envio dos acertos! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    enviar
}