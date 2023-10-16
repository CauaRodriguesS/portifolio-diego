
    // Função para rolar a página para baixo quando o elemento é clicado
    document.getElementById("botaoportifolio").addEventListener("click", function() {
      window.scrollBy({
        top: window.innerHeight, // Rola para baixo por uma janela inteira
        behavior: "smooth" // Role suavemente
      });
    });
  
