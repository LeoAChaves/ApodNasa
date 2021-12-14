const dataAtual = new Date();
const hora = dataAtual.getHours();
const dia = String(dataAtual.getDate()).padStart(2, "0");
const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
const ano = String(dataAtual.getFullYear());
const hoje = ano + "-" + mes + "-" + dia;

$(".dataInvalida").addClass("none");

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
      $("#data").removeClass("data-vermelha");
      $(".dataInvalida").addClass("none");
      $(".dataInvalida").removeClass("display");
    },
    error: function () {
      $("#data").addClass("data-vermelha");
      $(".dataInvalida").removeClass("none");
      $(".dataInvalida").addClass("display");
    },
  });
}

if (hora >= 5) {
  requisicao(hoje);
} else {
  requisicao("2000-01-21");
}

function enviar() {
  const dataInp = $("#data").val();
  requisicao(dataInp);
}
