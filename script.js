const cartao = document.getElementById("cartao");

// Gira o cartão ao clicar
cartao.addEventListener("click", () => {
    cartao.classList.toggle("aberto");
});

// DATA DO EVENTO (14 de Março de 2026)
const dataFesta = new Date("March 14, 2026 19:00:00").getTime();

setInterval(() => {
    const agora = new Date().getTime();
    const diferenca = dataFesta - agora;

    const timer = document.getElementById("timer");

    if (diferenca <= 0) {
        timer.innerHTML = "É HOJE! 🎉";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

    timer.innerHTML = `${dias}d ${horas}h ${minutos}m`;
}, 1000);

// NOVA FUNÇÃO: Confirmar Presença no WhatsApp
function confirmar() {
    const numeroTelefone = "5561994420949"; // <-- COLOQUE SEU NÚMERO AQUI (com DDD)
    const nomeFilha = "Agatha Christine";
    const mensagem = encodeURIComponent(`Olá! Confirmo minha presença no aniversário da ${nomeFilha}! 🐞🐾`);
    
    window.open(`https://wa.me/${numeroTelefone}?text=${mensagem}`, '_blank');
}
