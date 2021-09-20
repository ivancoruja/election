const prompt = require("prompt-sync")();

let nascimento = 0;
let anoAtual = new Date().getFullYear();
let idade = 0;
let autorizar = String();
let msg = String();

let opcoes = (`Opções de voto:

1 - Chaves
2 - Chiquinha
3 - Seu Madruga
4 - Branco
5 - Nulo`);

let candidatos = {
    'Chaves': 0,
    'Chiquinha': 0,
    'Seu Madruga': 0,
}

let nulbra = {
    branco: 0,
    nulo: 0
}

let resultado = [];

function autorizaVoto(anoNascimento) {
    idade = anoAtual - anoNascimento;
    if (idade < 16) {
        autorizar = 'Negado';
    } else if (idade < 18 || idade >= 70) {
        autorizar = 'Opcional';
    } else {
        autorizar = 'Obrigatório';
    }
    return autorizar;
}

function votacao(autorizacao, voto) {
    if (autorizar == 'Opcional' || autorizar == 'Obrigatório') {
        autorizacao = true;
    } else {
        autorizacao = false;
    }
    if (autorizacao) {
        msg = 'Voto computado!';
        if (voto == 1) {
            candidatos.Chaves++;
        } else if (voto == 2) {
           candidatos.Chiquinha++;
        } else if (voto == 3) {
            candidatos["Seu Madruga"]++;
        } else if (voto == 4) {
            nulbra.branco++;
        } else {
            nulbra.nulo++;
        }
        return msg;
    } else {
    msg = 'Você não pode votar!';
    return msg;
    }
}

function exibirResultados() {
    resultado.push(candidatos);
    resultado.push(nulbra);
    console.log('Resultado das eleições: ');
    console.log();
    for (res of resultado) {
        console.log(res);
        console.log();
    }
}

while (true) {

    nascimento = prompt('Digite o ano de nascimento (AAAA): ');
    while (isNaN(nascimento) || nascimento === '' || nascimento > 2021 || nascimento < 1899) {
        console.log('Digite um ano válido!')
        nascimento = prompt('Digite o ano de nascimento (AAAA): ');
    }

    autorizaVoto(nascimento);
    console.clear();
    console.log(opcoes);
    console.log();
    
    votar = prompt('Digite o número correspondendente a seu voto: ');

    console.log(votacao(autorizar, votar));

    final = prompt('Deseja computar mais um voto? (s/n) ');
    if (final !== 'n') {}
    else {break}; 
}

console.clear();
exibirResultados();

// C:\Users\ivan\Desktop\repos\election