function rodarTestesUnitarios() {
  const resultados = [];

  //assert simula o comortamento de teste unitario, ele recebe o titulo e a condição(true ou f)
  function assert(titulo, condicao) {
    resultados.push({ titulo, passou: condicao });
  }

  // aqui é a execução dos testes, Cada linha dessas está executando um teste na função validar Login com diferentes parâmetros e comparando com o resultado esperado (true ou f)
  assert('Login correto deve retornar true', validarLogin('matheuscavalveiro2019@gmail.com', '1234') === true);
  assert('Usuário incorreto deve retornar false', validarLogin('invalido@gmail.com', '1234') === false);
  assert('Senha incorreta deve retornar false', validarLogin('matheuscavalveiro2019@gmail.com', 'errado') === false);
  assert('Email vazio deve retornar false', validarLogin('', '1234') === false);
  assert('Senha vazia deve retornar false', validarLogin('matheuscavalveiro2019@gmail.com', '') === false);

  //aqui mostra os resultados na pagina, Seleciona uma div com id testes-resultados e define seu conteúdo inicial.
  const div = document.getElementById('testes-resultados');
  div.innerHTML = '<h3>Testes Unitários:</h3>';

  //esse codigo para cada teste em resultados, ele coloca uma linha na tela, c é true ela manda msg 'certo' e fica verde, e c falhou mostra msg 'erro' e fica vermelho.
  resultados.forEach((res, i) => {
    div.innerHTML += `<p>Teste ${i + 1}: ${res.titulo} - <strong style="color:${res.passou ? 'green' : 'red'}">${res.passou ? 'certo' : 'errado'}</strong></p>`;
  });
}

//Esse trecho faz com que, ao clicar no botão com id="rodarTestesUnitBtn", a função rodarTestesUnitarios seja executada.
document.getElementById('rodarTestesUnitBtn').addEventListener('click', rodarTestesUnitarios);