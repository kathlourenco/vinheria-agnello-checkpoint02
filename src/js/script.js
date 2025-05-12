let nomevinho = "";
let tipovinho = "";
let dataproducao = "";
let estoque = "";
let escolha = ""
var qntVinhos = 1;
var contEstoqueBaixo = 0;

function cadastrarVinho() {

    nomevinho = prompt("Insira o nome de um vinho: ");

    if (nomevinho.trim() === "") {
        alert("Insira o nome de um vinho da nossa loja!");
        nomevinho = prompt("Insira o nome de um vinho: ");
    }

    tipovinho = prompt("Insira o tipo do vinho: Tinto, Branco ou Rosé: ");
    tipovinho = tipovinho.trim();

    if (tipovinho !== "tinto" && tipovinho !== "Tinto" && tipovinho !== "branco" && tipovinho !== "Branco" && tipovinho !== "rosé" && tipovinho !== "rose" && tipovinho !== "Rose" && tipovinho !== "Rosé") {
        alert("Insira um tipo de vinho da nossa loja!");
        tipovinho = prompt("Insira o tipo do vinho: Tinto, Branco ou Rosé: ");
        tipovinho = tipovinho.trim();
    }

    if (tipovinho.toLowerCase() === "tinto") {
        tipovinho = "Tinto";

    } else if (tipovinho.toLowerCase() === "branco") {
        tipovinho = "Branco";

    } else if (tipovinho.toLowerCase() === "rosé" || tipovinho.toLowerCase() === "rose") {
        tipovinho = "Rosé";

    } else {
        alert("Insira um tipo de vinho da nossa loja!");
    }


    dataproducao = prompt("Insira a data de produção do vinho: ").trim();
    dataproducao = dataproducao.trim();

    while (dataproducao === "" || parseInt(dataproducao) < 1000 || parseInt(dataproducao) > 2026) {

        alert("Insira uma data de produção válida!");
        dataproducao = parseInt(prompt("Insira a data de produção do vinho: "));
    }
    dataproducao = parseInt(String(dataproducao).trim());


    estoque = prompt("Insira quantos vinhos deseja cadastrar: ");

    if (estoque.trim() === "" || parseInt(estoque) <= 0) {

        alert("Insira uma quantidade de vinhos válida no estoque!");
        estoque = prompt("Insira quantos vinhos deseja levar: ");
    }

    if (estoque.trim() === "" || parseInt(estoque) <= 0) {

        alert("Valor inválido! Por favor, insira uma quantidade maior que 0.");
        estoque = prompt("Insira quantos vinhos deseja levar: ");
    }

    estoque = parseInt(estoque);
    alert("A quantidade de vinhos é: " + estoque);
}
cadastrarVinho();


function detalhesVinho(nome, tipo, estoque, producao) {
    const mensagem = `Vinho cadastrado!
    Nome do vinho:  ${nome}
    Tipo do vinho:  ${tipo}
    Estoque disponível:  ${estoque}
    Ano de fabricação:  ${producao}`;

    alert(mensagem);
    alert("Veja os detalhes do cadastro no console!");
    console.log("Detalhes da sua escolha: ");
    console.log(`Nome: ${nome}`);
    console.log(`Tipo:  ${tipo}`);
    console.log(`Estoque:  ${estoque}`);
    console.log(`Ano:  ${producao}`);


    if (estoque < 5) {
        console.log("Classificação do estoque do vinho : " + "  " + "Estoque baixo!");
        contEstoqueBaixo += 1;
    }
    if (producao < 2015) {
        console.log("Classificação da safra do vinho : " + "  " + "  Vinho Antigo!");
    }
    if (producao >= 2015 && producao <= 2019) {
        console.log("Classificação da safra do vinho : " + "  " + "  Vinho Amadurecido!");
    }
    if (producao >= 2020) {
        console.log("Classificação da safra do vinho : " + "  " + "  Vinho jovem!");
    }

}

detalhesVinho(nomevinho, tipovinho, estoque, dataproducao);

function recadastrarVinho() {

    escolha = prompt("Deseja cadastrar outro vinho?");

    while (escolha.toLowerCase() == "sim" || escolha.toLowerCase() == "s" || escolha.toLowerCase() == "y") {

        qntVinhos += 1;
        cadastrarVinho();
        detalhesVinho(nomevinho, tipovinho, estoque, dataproducao);

        escolha = prompt("Deseja cadastrar outro vinho?");

    }

    console.log(`Tipos de vinho cadastrados: ${qntVinhos}`)
    console.log(`Vinhos com baixo estoque: ${contEstoqueBaixo}`)
    alert("Confira o console para ver a quantidade de vinhos cadastrados e quantos estão com estoque baixo")

}
recadastrarVinho();

