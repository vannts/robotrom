// Seleciona os elementos que serão manipulados
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

// Define os valores de cada peça
const pecas = {
  "bracos": {
    "forca": 29,
    "poder": 35,
    "energia": -21,
    "velocidade": -5
  },

  "blindagem": {
    "forca": 41,
    "poder": 20,
    "energia": 0,
    "velocidade": -20
  },
  "nucleos":{
    "forca": 0,
    "poder": 7,
    "energia": 48,
    "velocidade": -24
  },
  "pernas":{
    "forca": 27,
    "poder": 21,
    "energia": -32,
    "velocidade": 42
  },
  "foguetes":{
    "forca": 0,
    "poder": 28,
    "energia": 0,
    "velocidade": -2
  }
};

// Adiciona eventos de clique aos controles
controle.forEach((elemento) => { 
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(evento.target.dataset.peca);
  });    
});

// Atualiza o contador de peças
function manipulaDados (operacao, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (!peca || !operacao) {
    console.error("Parâmetros inválidos!");
    return;
  }

  if(operacao === "-" && peca.value > 0) {
    peca.value = parseInt(peca.value) - 1;
  } else if (operacao === "+") {
    peca.value = parseInt(peca.value) + 1;
  } else {
    console.error("Operação inválida!");
    return;
  }
}

// Atualiza as estatísticas do robô
function atualizaEstatisticas(peca) {
  if (!peca) {
    console.error("Peça não definida!");
    return;
  }

  estatisticas.forEach((elemento) => {
    const estatistica = elemento.dataset.estatistica;
    const valorAtual = parseInt(elemento.textContent);
    const valorPeca = pecas[peca][estatistica];

    if (isNaN(valorAtual) || isNaN(valorPeca)) {
      console.error("Valores inválidos!");
      return;
    }

    elemento.textContent = valorAtual + valorPeca;
  });  
}
