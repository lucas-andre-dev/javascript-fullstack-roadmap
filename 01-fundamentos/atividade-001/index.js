const nome="Lucas"
const idade=25
const profissao="Estudante"
const cidade="Vila Velha"
const estudando=true
const limitador="========================"
const mensagem=`
    ${limitador}
    CARTÃO DO DESENVOLVEDOR
    ${limitador}
    Nome: ${nome}
    Idade: ${idade}
    Profissão: ${profissao}
    Cidade: ${cidade}
    Estudando Javascript: ${Estudando ? "Sim" : "Não"}
    ${limitador}
    TIPOS DAS VARIAVEIS
    ${limitador}
    tipo de nome: ${typeof nome}
    tipo de idade: ${typeof idade}
    tipo de profissao: ${typeof profissao}
    tipod de cidade: ${typeof cidade}
    tipo de estudando: ${typeof Estudando}
    ${limitador}
    Fim da atividade 001

`
console.log(mensagem)
