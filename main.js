Webcam.attach("#camera");

camera = document.getElementById("camera");

Webcam.set({
  width: 350,
  height: 300,
  image_format: "png",
  png_quality: 90,
});

function capturar() {
  Webcam.snap(function (data_uri) {
    document.getElementById("resultado").innerHTML =
      '<img id="foto" src="' + data_uri + '"/>';
  });
}

console.log("ml5 version", ml5.version);

classificar = ml5.imageClassifier(
  "https://teachablemachine.withgoogle.com/models/_9j2pt1iT/model.json",
  modeloCarregado
);

function modeloCarregado() {
  console.log("Modelo carregou! o/");
}

function verificar() {
  ing = document.getElementById("foto");
  classificar.classify(img, verificarFoto);
}

function verificarFoto(error, results) {
  if (error) {
    console.log(error);
  } else {
    document.getElementById("nomeObjeto").innerHTML=results[0].label;
    document.getElementById("precisao").innerHTML=results[0].confidence.toFixed(3);
  }
}
