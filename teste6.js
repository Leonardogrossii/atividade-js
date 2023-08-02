let Produto = prompt('Digite o nome do produto que deseja:');
let categoria = prompt('Digite a categoria do produto (alimentos, bebidas ou destinado a limpeza):');
let quantidade = prompt('Digite a quantidade atual em seu estoque:');

if (Produto && categoria && quantidade) {
  let quantidadeEstoque = parseInt(quantidade);
  let Minimo = 0;

  switch (categoria) {
    case 'alimentos':
      Minimo = 50;
      break;
    case 'bebidas':
      Minimo = 75;
      break;
    case 'limpeza':
      Minimo = 30;
      break;
    default:
      console.log('Categoria de produto inválida.');
      break;
  }

  if (quantidadeEstoque < Minimo) {
    console.log(`Solicitar ${Produto} à equipe de compras, temos apenas ${quantidadeEstoque} em estoque.`);
  } else {
    console.log(`${Produto} está com estoque adequado.`);
  }
} else {
  console.log('Por favor, preencha todas as informações corretamente.');
}


