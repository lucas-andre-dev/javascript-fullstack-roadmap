const nome="Lucas";
const idade=25;
const profissao="Estudante";
const cidade="Vila Velha";
const estudando=true;
const limitador="========================";
const mensagem=`
    ${limitador}
    CARTÃO DO DESENVOLVEDOR
    ${limitador}
    Nome: ${nome}
    Idade: ${idade}
    Profissão: ${profissao}
    Cidade: ${cidade}
    Estudando JavaScript: ${estudando ? "Sim" : "Não"}
    ${limitador}
    TIPOS DAS VARIAVEIS
    ${limitador}
    tipo de nome: ${typeof nome}
    tipo de idade: ${typeof idade}
    tipo de profissao: ${typeof profissao}
    tipo de cidade: ${typeof cidade}
    tipo de estudando: ${typeof estudando}
    ${limitador}
    Fim da atividade 001

`;
console.log(mensagem);
