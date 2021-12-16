const dataAtual = new Date();
const hora = dataAtual.getHours();
const dia = String(dataAtual.getDate()).padStart(2, "0");
const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
const ano = String(dataAtual.getFullYear());
const hoje = ano + "-" + mes + "-" + dia;
$(".dataInvalida").addClass("none");

function alterarConteudo(result) {
  $(".titulo").text(result.title);
  $(".mostraData").text(result.date);
  $(".direitosImagem").text(result.copyright);
  $(".descricao").text("Explanation: " + result.explanation);
  if (result.media_type == "image") {
    $(".dayPicture").attr("src", result.url);
    $(".dayVideo").addClass("none");
    $(".dayPicture").removeClass("none");
  } else {
    $(".dayPicture").addClass("none");
    $(".dayVideo").removeClass("none");
    $(".dayVideo").attr("src", result.url);
  }
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
$(".enter").click(function () {
  const dataInp = $("#data").val();
  requisicao(dataInp);
});

if (hora >= 5) {
  requisicao(hoje);
} else {
  requisicao("2000-01-21");
}
