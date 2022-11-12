const obterPrecoBitcoin = async () => {
  try {
    const resultado = await fetch('https://api.coincap.io/v2/assets/bitcoin');
    const { data } = await resultado.json();
    console.log(`O preço do Bitcoin - ${data.symbol} em dólares hoje é $ ${data.priceUsd}`);
  } catch (error) {
    console.error('Erro');
  }
};
obterPrecoBitcoin();
