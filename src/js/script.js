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

    nomeVinho = prompt(("Insira o nome de um vinho: ")).trim();

    while (nomeVinho === "") {
        alert("Insira um nome de vinho que seja válido!");
        nomeVinho = prompt("Insira o nome de um vinho: ");
    }

    tipovinho = prompt("Insira o tipo do vinho: Tinto, Branco ou Rosé: ")
    tipovinho = (tipovinho.trim()).toLowerCase();

    while (tipovinho !== "tinto" && tipovinho !== "branco" && tipovinho !== "rosé" && tipovinho !== "rose") {
        alert("Insira um tipo de vinho dentre os informados!");
        tipovinho = prompt("Insira o tipo do vinho - Tinto, Branco ou Rosé: ");
        tipovinho = (tipovinho.trim()).toLowerCase();
    }

    if (tipovinho === "tinto") {
        tipovinho = "Tinto";

    } 
    else if (tipovinho === "branco") {
        tipovinho = "Branco";

    } 
    else if (tipovinho === "rosé" || tipovinho === "rose") {
        tipovinho = "Rosé";

    }

    dataProducao = parseInt(prompt("Insira o ano de produção do vinho: "));

    while (dataProducao == "" || dataProducao < 0 || dataProducao > 2025 || isNaN(dataProducao)) {

        alert("Insira um ano de produção válido!");
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
    if (document.getElementById("vinhos-container")) {
    adicionarNaTabela(nome, tipo, producao, estoque);
}

}


function recadastrarVinho() {

    escolha = prompt(("Deseja cadastrar outro vinho?").toLowerCase());

    while (escolha == "sim" || escolha == "s" || escolha == "y" || escolha == "yes") {

        qntVinhos += 1;
        cadastrarVinho();
        detalhesVinho(nomeVinho, tipovinho, estoque, dataProducao);

        escolha = prompt("Deseja cadastrar outro vinho?");

    }

    console.log(`Quantidade de vinhos cadastrados: ${qntVinhos} \nVinho com a safra mais antiga: ${maisVelhoNome}\nQuantidade de vinhos em baixo estoque: ${contEstoqueBaixo}`)

    alert("Confira o console para ver a quantidade de vinhos cadastrados e outros detalhes")

}


cadastrarVinho();
detalhesVinho(nomeVinho, tipovinho, estoque, dataProducao);
recadastrarVinho();

function adicionarNaTabela(nome, tipo, ano, estoque) {
    const container = document.getElementById("vinhos-container");

    const vinhoCard = document.createElement("div");
    vinhoCard.classList.add("linha-vinho");

    vinhoCard.innerHTML = `
        <div class="coluna">${nome}</div>
        <div class="coluna">${tipo}</div>
        <div class="coluna">${ano}</div>
        <div class="coluna">${estoque}</div>
        <div class="coluna">${ano < 2015 ? "Antigo" : ano <= 2019 ? "Maduro" : "Jovem"}</div>
    `;

    container.appendChild(vinhoCard);
}

