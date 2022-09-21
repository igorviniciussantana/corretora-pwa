window.onload = () => {
    "use strict";
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js");
    }
};



function calc() {

    // Importações
    var terreno = document.querySelector('#terreno').value;
    var construcao = document.querySelector('#construcao').value;
    var valorTotal = document.querySelector('.totalValue');
    var porcentagemTotal = document.querySelector('.porcentagemValue');
    var clienteTotal = document.querySelector('.clienteValue');

    // Calculos
    var terrenoTotal = terreno * 260;
    var construcaoTotal = construcao * 1800;
    var calculo = terrenoTotal + construcaoTotal;
    var porcentagem = calculo * 0.06;
    var cliente = calculo - porcentagem;


    // Retornos
    valorTotal.textContent = calculo + "R$";
    porcentagemTotal.textContent = porcentagem + "R$";
    clienteTotal.textContent = cliente + "R$";
}