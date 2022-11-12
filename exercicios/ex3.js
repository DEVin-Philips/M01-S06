function aprovarDadosCadastrais(cliente) {
  console.log('Executou aprovarDadosCadastrais');
  return new Promise((resolve, reject) => {
    if (cliente.cpf === 11111111111) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

function aprovarValorSolicitado(cliente, valor) {
  console.log('Executou aprovarValorSolicitado');
  return new Promise((resolve, reject) => {
    if (cliente.margem >= valor) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}

const cliente = { cpf: 11111111111, nome: 'Calleri', margem: 1000.0 };
const aprovacaoCadastro = aprovarDadosCadastrais(cliente);
const aprovacaoValor = aprovarValorSolicitado(cliente, 300.0);

Promise.all([aprovacaoCadastro, aprovacaoValor])
  .then(() => {
    console.log('Aprovado!');
  })
  .catch(() => {
    console.log('Reprovado!');
  })
  .finally(() => {
    console.log('Fim do processamento');
  });
