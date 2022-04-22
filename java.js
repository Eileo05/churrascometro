let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')
let resultado = document.getElementById('resultado')

function calcular() {
    console.log('calculando...')

    let Adultos = inputAdultos.value
    let Criancas = inputCriancas.value
    let Duracao = inputDuracao.value


    let qtdtotalcarne = carnePP(Duracao) * Adultos + (carnePP(Duracao) / 2 * Criancas)
    let qtdtotalcerveja = cervejaPP(Duracao) * Adultos
    let qtdtotalbebidas = bebidaPP(Duracao) * Adultos + (bebidaPP(Duracao) / 2 * Criancas)
    
    resultado.innerHTML = `<h2> Você vai precisar de:</h2>`
   
    resultado.innerHTML += `<div class='result-block'>
    <img src="./presunto-de-porco.png">
    <p>  ${ qtdtotalcarne / 1000} kg de carne</p> </div>`
   
    resultado.innerHTML += `<div class='result-block'>
    <img src="./cervejas.png">
    <p> ${Math.ceil(qtdtotalcerveja / 355)} latas de cerveja</p> </div>`
   
    resultado.innerHTML += `<div class='result-block'>
    <img src="./garrafa-de-agua.png">
    <p> ${Math.ceil(qtdtotalbebidas / 2000)} pets 2L de bebidas</p> </div>`


}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}