document.getElementById("calcBtn").addEventListener('click', function() {
  var visitaMensal = document.getElementById('inputVisita').value;
  var numeroConversao = document.getElementById('inputConversao').value;
  var ticketMedio = document.getElementById('inputTicket').value;
  var aumentoTaxa = 20 / 100;

  validateData(visitaMensal, numeroConversao, ticketMedio, aumentoTaxa);
});

function validateData(visitaMensal, numeroConversao, ticketMedio, aumentoTaxa) {
  if (visitaMensal && numeroConversao && ticketMedio && aumentoTaxa && validateUrl()) {
    calculateROI(visitaMensal, numeroConversao, ticketMedio, aumentoTaxa);
  } else {
    var el = document.createElement("p");
    el.classList.add('alert-text');
    var textEl = document.createTextNode("Preencha todos os campos para seguir");
    el.appendChild(textEl);
    document.getElementsByClassName("box-form")[0].appendChild(el);
  }
}

function validateUrl() {
  var url = document.getElementById('inputURL').value;
  var regex = /(www.)+\w+.(com)+|(.br)/g;
  if (url.match(regex)) { 
    return true;
  }
  return false;
}
function calculateROI(visitaMensal, numeroConversao, ticketMedio, aumentoTaxa) {
  var taxaConversao = Number(numeroConversao) / Number(visitaMensal);
  var faturamentoMensal = Number(ticketMedio) * Number(numeroConversao);
  var novoFaturamentoMensal = visitaMensal * (taxaConversao * (1 + aumentoTaxa)) * ticketMedio;
  var aumentoFaturamento = 12 * (novoFaturamentoMensal - faturamentoMensal);

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
    if (i === 1 ) td.innerText = accounting.formatMoney(Number(numeroConversao), "R$ ", 2, ".", ",");
    if (i === 2 ) td.innerText = accounting.formatMoney(Number(ticketMedio), "R$ ", 2, ".", ",");
    tr.appendChild(td);
  }

  table.appendChild(tr);
}

function createSecondTable(taxaConversao, faturamentoMensal) {
  var table = document.getElementsByTagName('table')[1];
  var tr = document.createElement('tr');

  for(i = 0; i < 2; i++) {
    var td = document.createElement('td');
    if (i === 0 ) td.innerText = taxaConversao.toFixed(2) + '%';
    if (i === 1 ) td.innerText = accounting.formatMoney(Number(faturamentoMensal), "R$ ", 2, ".", ",");
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
  td.innerText = accounting.formatMoney(Number(aumentoFaturamento), "R$ ", 2, ".", ",");
  tr.appendChild(td);

  table.appendChild(tr);
}
