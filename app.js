 function calcularMetrosLineares() {
      const volume = parseFloat(document.getElementById("volume").value);
      const alturaCm = parseFloat(document.getElementById("altura").value);
      const larguraCm = parseFloat(document.getElementById("largura").value);
      const resultadoDiv = document.getElementById("resultado");

      if (!volume || !alturaCm || !larguraCm || alturaCm <= 0 || larguraCm <= 0) {
        resultadoDiv.textContent = "Por favor, insira valores válidos.";
        return;
      }

      // Convertendo de cm para m
      const altura = alturaCm / 100;
      const largura = larguraCm / 100;

      const metrosLineares = volume / (altura * largura);
      resultadoDiv.textContent = `Resultado: ${metrosLineares.toFixed(2)} metros lineares`;
    }