
function imprimir() {
    setTimeout(function(){
        window.print();
    }, 1000);

    document.getElementById('btnProximaSenha').disabled = true;

      // Configura um timer para reativar o botão após 5 segundos
      setTimeout(function() {
        document.getElementById('btnProximaSenha').disabled = false;
      }, 5000);
    
}

setTimeout(function() {

})
//

// Inicializa o contador
let contador = localStorage.getItem('contadorSenhas') || 0;

// Atualiza o elemento h2 com o valor inicial do contador
document.getElementById('contadorSenhas').textContent = pad(contador, 3);

// Função para incrementar o contador e atualizar o elemento h2
function proximaSenha() {
    contador++;
    document.getElementById('contadorSenhas').textContent = pad(contador, 3);

    // Salva o valor do contador na localStorage
    localStorage.setItem('contadorSenhas', contador);
}

// Função para garantir que o número seja sempre exibido com 3 dígitos
function pad(num, size) {
    let numStr = num.toString();
    while (numStr.length < size) numStr = '0' + numStr;
    return numStr;
}

// Adiciona um ouvinte de eventos ao botão
document.getElementById('btnProximaSenha').addEventListener('click', proximaSenha);

  //

  function exibirHorarioAtual() {
    // Cria um novo objeto Date
    var dataAtual = new Date();

    // Obtém as partes da data (hora, minutos, segundos)
    var horas = dataAtual.getHours().toString().padStart(2, '0');
    var minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    // var segundos = dataAtual.getSeconds().toString().padStart(2, '0');

    // Formata as partes em uma string
    var horarioFormatado = horas + ":" + minutos;

    // Obtém o elemento <p> pelo ID e define seu conteúdo como o horário formatado
    document.getElementById("horarioAtual").innerText = horarioFormatado;
  }

  // Atualiza o horário a cada segundo (1000 milissegundos)
  setInterval(exibirHorarioAtual, 1000);

  function exibirDataAtual() {
    // Cria um novo objeto Date
    var dataAtual = new Date();

    // Obtém as partes da data (dia, mês, ano)
    var dia = dataAtual.getDate();
    var mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2); // O mês começa do zero, então somamos 1
    var ano = dataAtual.getFullYear();

    // Formata as partes em uma string
    var dataFormatada = dia + "/" + mes + "/" + ano;

    // Obtém o elemento <p> pelo ID e define seu conteúdo como a data formatada
    document.getElementById("dataAtual").innerText = dataFormatada;
  }

  // Atualiza a data a cada segundo (1000 milissegundos)
  setInterval(exibirDataAtual, 1000);

  //

  function limparLocalStorage() {
    localStorage.clear();
    location.reload();
  }