const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

const frase2 = `Jorge tem uma casa rosa e com portão laranja, com os dizeres: "BOAS VINDAS, ${"mas não deixe o gato sair".toUpperCase()}"`

const verificacao = `Tem a cor verde nessa frase? ${frase2.includes(`verde`)}\n Tem a cor laranja nessa frase? ${frase2.includes(`laranja`)} `

console.log(verificacao)

console.log(frase2)
 