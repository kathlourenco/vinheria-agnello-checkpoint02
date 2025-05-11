let vinhos = [
    { nome: "Cabernet Sauvignon", tipo: "Tinto", ano: 2010, estoque: 3 },
    { nome: "Chardonnay", tipo: "Branco", ano: 2018, estoque: 10 },
    { nome: "Merlot", tipo: "Tinto", ano: 2005, estoque: 2 },
    { nome: "Rosé Provence", tipo: "Rosé", ano: 2021, estoque: 6 },
    { nome: "Syrah", tipo: "Tinto", ano: 2012, estoque: 1 }
];

let vinhosEstoqueBaixo = 0;

let vinhoMaisAntigo = vinhos[0];

for (let i = 0; i < vinhos.length; i++) {
    let vinho = vinhos[i];

    // Verifica estoque baixo
    if (vinho.estoque < 5) {
        vinhosEstoqueBaixo++;
    }


    if (vinho.ano < vinhoMaisAntigo.ano) {
        vinhoMaisAntigo = vinho;
    }
}

console.log("Quantidade de vinhos com estoque baixo:", vinhosEstoqueBaixo);
console.log("Vinho com a safra mais antiga:");
console.log(`Nome: ${vinhoMaisAntigo.nome}`);
console.log(`Tipo: ${vinhoMaisAntigo.tipo}`);
console.log(`Ano: ${vinhoMaisAntigo.ano}`);
console.log(`Estoque: ${vinhoMaisAntigo.estoque}`);