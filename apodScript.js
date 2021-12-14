const dataAtual = new Date();
const hora = dataAtual.getHours();
const dia = String(dataAtual.getDate()).padStart(2, "0");
const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
const ano = String(dataAtual.getFullYear());
const hoje = ano + "-" + mes + "-" + dia;

function alterarConteudo(result) {
  $(".titulo").text(result.title);
  $(".dayPicture").attr("src", result.url);
  $(".descricao").text(result.explanation);
  $(".direitosImagem").text(result.copyright);
}

function requisicao(dataSelecionada) {
  $.ajax({
    url:
      "https://api.nasa.gov/planetary/apod?api_key=LwZT59eFJfIoithWrnwFlvgcJiZUWfVpmCroKSiZ&date=" +
      dataSelecionada,
    success: function (result) {
      alterarConteudo(result);
    },
  });
}

if (hora >= 5) {
  requisicao(hoje);
} else {
  requisicao("2000-01-21");
}
