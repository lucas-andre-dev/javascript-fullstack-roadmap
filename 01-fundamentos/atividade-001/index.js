let nome="Lucas"
let idade="25"
let profissao="Estudante"
let cidade="Vila Velha"
let Estudando=true
let limitador="========================"
let mensagem=`
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
    tipo de nome: ${typeof(nome)}
    tipo de idade: ${typeof(idade)}
    tipo de profissao: ${typeof(profissao)}
    tipod e cidade: ${typeof(cidade)}
    tipo de estudando: ${typeof(Estudando)}
    ${limitador}
    Fim da atividade 001

`
console.log(mensagem)
