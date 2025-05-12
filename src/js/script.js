let nomeVinho = "";
let tipovinho = "";
let dataProducao = "";
let estoque = "";
let escolha = "";
let qntVinhos = 1;
let contEstoqueBaixo = 0;
let maisVelhoAno = 2025;
let maisVelhoNome = "";

function cadastrarVinho() {

    nomeVinho = prompt("Insira o nome de um vinho: ");

    while (nomeVinho.trim() === "") {
        alert("Insira o nome de um vinho da nossa loja!");
        nomeVinho = prompt("Insira o nome de um vinho: ");
    }

    tipovinho = prompt("Insira o tipo do vinho: Tinto, Branco ou Rosé: ")
    tipovinho = tipovinho.trim();

    while (tipovinho !== "tinto" && tipovinho !== "Tinto" && tipovinho !== "branco" && tipovinho !== "Branco" && tipovinho !== "rosé" && tipovinho !== "rose" && tipovinho !== "Rose" && tipovinho !== "Rosé") {
        alert("Insira um tipo de vinho da nossa loja!");
        tipovinho = prompt("Insira o tipo do vinho: Tinto, Branco ou Rosé: ");
        tipovinho = tipovinho.trim();
    }

    if (tipovinho.toLowerCase() === "tinto") {
        tipovinho = "Tinto";

    } 
    else if (tipovinho.toLowerCase() === "branco") {
        tipovinho = "Branco";

    } 
    else if (tipovinho.toLowerCase() === "rosé" || tipovinho.toLowerCase() === "rose") {
        tipovinho = "Rosé";

    }

    dataProducao = parseInt(prompt("Insira a data de produção do vinho: "));

    while (dataProducao == "" || dataProducao < 0 || dataProducao > 2026 || isNaN(dataProducao)) {

        alert("Insira uma data de produção válida!");
        dataProducao = parseInt(prompt("Insira a data de produção do vinho: "));
    }


    estoque = parseInt(prompt("Insira quantos vinhos deseja cadastrar: "));

    while (estoque == "" || estoque <= 0 || isNaN(estoque)) {

        alert("Insira uma quantidade de vinhos válida!");
        estoque = prompt("Insira quantos vinhos deseja levar: ");
    }

    if (dataProducao < maisVelhoAno) {

        maisVelhoNome = nomeVinho;
        maisVelhoAno = dataProducao;
    }

}


function detalhesVinho(nome, tipo, estoque, producao) {
    const mensagem = `Vinho cadastrado!
    Nome do vinho:  ${nome}
    Tipo do vinho:  ${tipo}
    Ano de fabricação:  ${producao}
    Estoque disponível:  ${estoque}`;

    alert(mensagem);

    console.log(`Detalhes do ${qntVinhos}° vinho: \nNome: ${nome} \nTipo:  ${tipo} \nEstoque:  ${estoque}\nAno:  ${producao}`);

    if (estoque < 5) {
        console.log(`"${nome}" Está com estoque baixo!`);
        contEstoqueBaixo += 1
    }
    if (producao < 2015) {
        console.log(`"${nome}" É um vinho antigo!`);
    }
    if (producao >= 2015 && producao <= 2019) {
        console.log(`"${nome}" É um vinho maduro!`);
    }
    if (producao >= 2020) {
        console.log(`"${nome}" É um vinho jovem!`);
    }

}


function recadastrarVinho() {

    escolha = prompt("Deseja cadastrar outro vinho?");

    while (escolha.toLowerCase() == "sim" || escolha.toLowerCase() == "s" || escolha.toLowerCase() == "y") {

        qntVinhos += 1;
        cadastrarVinho();
        detalhesVinho(nomeVinho, tipovinho, estoque, dataProducao);

        escolha = prompt("Deseja cadastrar outro vinho?");

    }

    console.log(`Vinhos cadastrados: ${qntVinhos} \nVinho com a safra mais antiga: ${maisVelhoNome}\nQuantidade de vinhos em baixo estoque: ${contEstoqueBaixo}`)

    alert("Confira o console para ver a quantidade de vinhos cadastrados e outros detalhes")

}


cadastrarVinho();
detalhesVinho(nomeVinho, tipovinho, estoque, dataProducao);
recadastrarVinho();

