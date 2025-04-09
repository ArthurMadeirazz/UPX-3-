const consumoInput = document.getElementById("consumo");
const valorContaInput = document.getElementById("valorConta");
const saida = document.getElementById("saida");

function atualizarSimulacao() {
  const consumo = parseFloat(consumoInput.value);
  const valorConta = parseFloat(valorContaInput.value);

  const energiaGeradaPorPainel = 45; // kWh por mês (painel de 450W)
  const placasNecessarias = Math.ceil(consumo / energiaGeradaPorPainel);
  const economiaMensal = valorConta * 0.9; // assume 90% de economia
  const economiaAnual = economiaMensal * 12;
  const custoTotal = placasNecessarias * 2000; // preço médio de R$2000 por painel
const retornoInvestimento = (custoTotal / economiaMensal);
  const co2Reduzido = consumo * 2.4; // estimativa (kg de CO2)

  saida.innerHTML = `
    <p><span>${placasNecessarias}</span> placas solares necessárias.</p>
    <p>Economia mensal estimada: <span>R$ ${economiaMensal.toFixed(2)}</span></p>
    <p>Economia anual: <span>R$ ${economiaAnual.toFixed(2)}</span></p>
    <p>Retorno do investimento: <span>${retornoInvestimento} anos</span></p>
    <p>Redução de CO₂ por ano: <span>${co2Reduzido.toFixed(0)} kg</span> (equivale a plantar ${Math.round(co2Reduzido / 20)} árvores)</p>
  `;
}

consumoInput.addEventListener("input", atualizarSimulacao);
valorContaInput.addEventListener("input", atualizarSimulacao);

atualizarSimulacao();
