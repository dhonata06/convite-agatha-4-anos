const cartao = document.getElementById("cartao");
const btnConfirmar = document.getElementById("btnConfirmar");

// Clique no card → gira
cartao.addEventListener("click", () => {
    cartao.classList.toggle("aberto");
});

// Clique no botão → abre WhatsApp
btnConfirmar.addEventListener("click", (e) => {
    e.stopPropagation(); // impede o giro

    const url = "https://wa.me/5561994420949?text=Olá!+Confirmo+presença!+🐞";
    window.open(url, "_blank");
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
