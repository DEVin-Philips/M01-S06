function sleep(param, tempo = 3000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(param), tempo);
  });
}

sleep('teste', 200)
  .then(function (resultado) {
    console.log(resultado);
  })
  .catch((erro) => console.log(`Erro: ${erro}`))
  .finally(() => {
    console.log('Finalizou');
  });

sleep('teste').then(function (resultado) {
  console.log(resultado);
});
