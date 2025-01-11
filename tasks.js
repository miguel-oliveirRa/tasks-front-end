// 1)
let i = 13, soma = 0, k = 0

while (k < i) {
    k++
    soma += k
}
console.log(soma)

// 2)
let number = 10, a = 0, b = 1, control

while (a <= number) {
    [a, b] = [b, a + b]
}

if (a == number) {
    console.log("existe em fibonnaci")
}
else(a != number)
{
    console.log("nao existe em fibonnaci")
}

// 3) 
const faturamentoMensal = [
    { dia: 1, valor: 100 },
    { dia: 2, valor: 2300 },
    { dia: 3, valor: 0 },
    { dia: 4, valor: 0 },
    { dia: 5, valor: 3500 },
    { dia: 6, valor: 50 },
    { dia: 7, valor: 0 }
];

function analisarFaturamento(dados) {
    const diasValidos = dados.filter(d => d.valor > 0);
    const valores = diasValidos.map(d => d.valor);

    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);

    const soma = valores.reduce((tot, valor) => tot + valor, 0);
    const mediaMensal = soma / diasValidos.length;

    const diasAcimaDaMedia = diasValidos.filter(d => d.valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        mediaMensal,
        diasAcimaDaMedia
    };
}

const resultado = analisarFaturamento(faturamentoMensal);

console.log("Menor valor de faturamento:", resultado.menorValor);
console.log("Maior valor de faturamento:", resultado.maiorValor);
console.log("Média mensal de faturamento:", resultado.mediaMensal.toFixed(2));
console.log("Dias com faturamento acima da média:", resultado.diasAcimaDaMedia);

// 4) 
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

const percentualPorEstado = {};

for (const estado in faturamentoPorEstado) {
    percentualPorEstado[estado] = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
}

console.log("Percentual de representação por estado:");
for (const estado in percentualPorEstado) {
    console.log(`${estado}: ${percentualPorEstado[estado].toFixed(2)}%`);
}
// 5)
function inverterString(str) {
    let strInvertida = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
    }
    
    return strInvertida;
}

let minhaString = "Exemplo de string";
let stringInvertida = inverterString(minhaString);
console.log("String invertida:", stringInvertida);