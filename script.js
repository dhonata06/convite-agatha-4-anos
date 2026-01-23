const cartao = document.getElementById("cartao");

cartao.addEventListener("click", function () {
    this.classList.toggle("aberto");
});

// CONTAGEM REGRESSIVA
const dataFesta = new Date("March 14, 2026 19:00:00").getTime();

const atualizarTimer = setInterval(() => {
    const agora = new Date().getTime();
    const diferenca = dataFesta - agora;
    const timerElemento = document.getElementById("timer");

    if (!timerElemento) return;

    if (diferenca < 0) {
        clearInterval(atualizarTimer);
        timerElemento.innerHTML = "A FESTA COMEÇOU! 🐞";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

    timerElemento.innerHTML = `${dias}d ${horas}h ${minutos}m`;
}, 1000);
