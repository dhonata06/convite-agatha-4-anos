# 🐞 Ladybug Interactive Invite | Agatha's 4th Birthday

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Hospedado-brightgreen)](SEU_LINK_AQUI)
[![Tech](https://img.shields.io/badge/Tecnologias-HTML5%20%7C%20CSS3%20%7C%20JS-blue)](#-tecnologias)

Um convite digital interativo e responsivo desenvolvido para celebrar o aniversário de 4 anos da Agatha Christine. O projeto foca em uma experiência de usuário fluida (Mobile First) com efeitos visuais modernos.

---

## 🚀 Funcionalidades Principais

* **Efeito Flip 3D:** Implementação de animação de rotação de 180 graus ao interagir com o card, utilizando `preserve-3d` e `backface-visibility` para simular um convite físico.
* **Contagem Regressiva Dinâmica:** Script em JavaScript puro (Vanilla JS) que calcula a diferença de tempo em tempo real até a data do evento (14 de Março de 2026).
* **Confirmação via API do WhatsApp:** Integração direta que facilita a confirmação de presença com mensagem pré-configurada.
* **Design Mobile-First:** Otimizado para dispositivos móveis com suporte para Safe Areas (iPhone/Android) usando `viewport-fit=cover` e unidades `svh`.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica para melhor acessibilidade e SEO.
* **CSS3:** Uso avançado de Flexbox, Transições, Animações e Perspectiva 3D.
* **JavaScript (ES6+):** Manipulação de DOM, Event Listeners e lógica de temporizadores.

## 🧠 Desafios Técnicos & Soluções

### 1. Interatividade vs. Navegação
Um desafio comum em cards que giram é o clique em botões internos disparar o giro do card pai. Para resolver isso, utilizei o método `e.stopPropagation()` no botão de confirmação, garantindo que o usuário possa clicar no link sem que o convite feche inesperadamente.

### 2. Performance Visual
Para manter a fluidez da animação em celulares mais antigos, as propriedades de transformação (`transform`) foram priorizadas em vez de alterar dimensões físicas, o que evita o *reflow* da página e garante 60 FPS.

---

## 📦 Como Visualizar

1. Clone o repositório:
   ```bash
   git clone [https://github.com/dhonata06/convite-agatha-4-anos](https://github.com/dhonata06/convite-agatha-4-anos)

1. Clone o repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/NOME_DO_REPO.git](https://github.com/SEU_USUARIO/NOME_DO_REPO.git)
