document.getElementById("calcBtn").addEventListener('click', function() {
  const url = document.getElementById('inputURL').value;
  const visitaMensal = document.getElementById('inputVisita').value;
  const numeroConversao = document.getElementById('inputConversao').value;
  const ticketMedio = document.getElementById('inputTicket').value;
  const aumentoTaxa = 20 / 100;

  calculateROI(visitaMensal, numeroConversao, ticketMedio, aumentoTaxa);
});

function calculateROI(visitaMensal, numeroConversao, ticketMedio, aumentoTaxa) {
  const taxaConversao = Number(numeroConversao) / Number(numeroConversao);
  const faturamentoMensal = Number(ticketMedio) * Number(numeroConversao);
  const novoFaturamentoAnual = visitaMensal * (taxaConversao + aumentoTaxa) * ticketMedio;
  const aumentoFaturamento = 12 * (novoFaturamentoAnual * faturamentoMensal);

  displayData(visitaMensal, numeroConversao, ticketMedio, taxaConversao, faturamentoMensal, aumentoTaxa, aumentoFaturamento);
}

function displayData(visitaMensal, numeroConversao, ticketMedio, taxaConversao, faturamentoMensal, aumentoTaxa, aumentoFaturamento) {
  document.getElementById('formCard').classList.add('d-none');
  document.getElementById('resultCard').classList.remove('d-none');

  createFirstTable(visitaMensal, numeroConversao, ticketMedio);
  createSecondTable(taxaConversao, faturamentoMensal);
  createThirdTable(aumentoTaxa);
  createFourthTable(aumentoFaturamento);
}

function createFirstTable(visitaMensal, numeroConversao, ticketMedio) {
  var table = document.getElementsByTagName('table')[0];
  var tr = document.createElement('tr');

  for(i = 0; i < 3; i++) {
    var td = document.createElement('td');
    if (i === 0 ) td.innerText = visitaMensal;
    if (i === 1 ) td.innerText = numeroConversao;
    if (i === 2 ) td.innerText = 'R$ ' + ticketMedio;
    tr.appendChild(td);
  }

  table.appendChild(tr);
}

function createSecondTable(taxaConversao, faturamentoMensal) {
  var table = document.getElementsByTagName('table')[1];
  var tr = document.createElement('tr');

  for(i = 0; i < 2; i++) {
    var td = document.createElement('td');
    if (i === 0 ) td.innerText = taxaConversao + '%';
    if (i === 1 ) td.innerText = 'R$ ' + faturamentoMensal;
    tr.appendChild(td);
  }

  table.appendChild(tr);
}

function createThirdTable(aumentoTaxa) {
  var table = document.getElementsByTagName('table')[2];
  var tr = document.createElement('tr');
  tr.style.textAlign = 'left';

  var td = document.createElement('td');
  td.classList.add('td-border');
  td.innerText = aumentoTaxa * 100 + '%';
  tr.appendChild(td);

  table.appendChild(tr);
}

function createFourthTable(aumentoFaturamento) {
  var table = document.getElementsByTagName('table')[3];
  var tr = document.createElement('tr');
  tr.style.textAlign = 'left';

  var td = document.createElement('td');
  td.innerText = 'R$ ' + aumentoFaturamento.toFixed(2);
  tr.appendChild(td);

  table.appendChild(tr);
}
