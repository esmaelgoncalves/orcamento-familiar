function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Orçamento Familiar')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
}

function saveData(jsonString) {
  PropertiesService.getScriptProperties().setProperty('orcamento_data', jsonString);
}

function loadData() {
  return PropertiesService.getScriptProperties().getProperty('orcamento_data') || '{}';
}

function verificarDados() {
  const dados = PropertiesService.getScriptProperties().getProperty('orcamento_data');
  Logger.log(dados ? dados.substring(0, 500) : 'VAZIO - nenhum dado salvo');
}