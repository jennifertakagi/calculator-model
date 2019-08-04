var $ = window.jQuery;

document.getElementById("calcBtn").addEventListener('click', function(event) {
  event.preventDefault();
  var visitaMensal = $('#inputVisita').val();
  var numeroConversao = $('#inputConversao').val();
  var ticketMedio = $('#inputTicket').val();
  var aumentoTaxa = 20 / 100;

  validateData(visitaMensal, numeroConversao, ticketMedio, aumentoTaxa);
});

function validateData(visitaMensal, numeroConversao, ticketMedio, aumentoTaxa) {
  if (visitaMensal && numeroConversao && ticketMedio && aumentoTaxa && validateUrl()) {
    calculateROI(visitaMensal, numeroConversao, ticketMedio, aumentoTaxa);
  } else if (!$('.alert-text')[0]){
    var alertElement = document.createElement("p");
    $(alertElement).addClass('alert-text');
    $(alertElement).append(document.createTextNode("Preencha todos os campos para seguir"));
    $(".box-form").append(alertElement);
  }
}

function validateUrl() {
  var url = $('#inputURL').val();
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
  $('#formCard').addClass('d-none');
  $('#resultCard').removeClass('d-none');

  $('#visitas').text(visitaMensal);
  $('#conversoes').text(numeroConversao);
  $('#ticket').text(accounting.formatMoney(Number(ticketMedio), "R$ ", 2, ".", ","));
  $('#taxaConversao').text(taxaConversao.toFixed(2) + '%');
  $('#faturamento').text(accounting.formatMoney(Number(faturamentoMensal), "R$ ", 2, ".", ","));
  $('#aumentoConversao').text(aumentoTaxa * 100 + '%');
  $('#aumentoAnual').text(accounting.formatMoney(Number(aumentoFaturamento), "R$ ", 2, ".", ","));
}
