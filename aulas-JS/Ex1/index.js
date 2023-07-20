const nome = prompt("Insira o seu nome: ")
const sobrenome = prompt("Insira o seu sobrenome: ")
const estudo = prompt("Insira o seu campo de estudo: ")
const data = prompt("Insira seu ano de nascimento: ")

alert(
    "Cadastro realizado com sucesso! \n" +
    "\nNome completo: " + nome + " " + sobrenome +
    "\nCampo de estudo: " + estudo +
    "\nIdade: " + (2023 - data)
)
