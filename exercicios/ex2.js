const isBrowser = typeof window !== 'undefined';

const timer = () => {
  const interval = setInterval(function () {
    const dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleTimeString('pt-BR');
    console.log(dataFormatada);

    if (isBrowser) {
      const span = document.getElementById('span');
      span.innerText = dataFormatada;
    }
  }, 2000);

  setTimeout(() => {
    clearInterval(interval);
  }, 10000);
};
timer();
