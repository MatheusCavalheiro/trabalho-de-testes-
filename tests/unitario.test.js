function rodarTestesUnitarios() {
  const resultados = [];

  function assert(titulo, condicao) {
    resultados.push({ titulo, passou: condicao });
  }

  // Testes
  assert('Login correto deve retornar true', validarLogin('admin@gmail.com', '1234') === true);
  assert('Usuário incorreto deve retornar false', validarLogin('invalido@gmail.com', '1234') === false);
  assert('Senha incorreta deve retornar false', validarLogin('admin@gmail.com', 'errado') === false);
  assert('Email vazio deve retornar false', validarLogin('', '1234') === false);
  assert('Senha vazia deve retornar false', validarLogin('admin@gmail.com', '') === false);

  const div = document.getElementById('testes-resultados');
  div.innerHTML = '<h3>Testes Unitários:</h3>';
  resultados.forEach((res, i) => {
    div.innerHTML += `<p>Teste ${i + 1}: ${res.titulo} - <strong style="color:${res.passou ? 'green' : 'red'}">${res.passou ? 'certo' : 'errado'}</strong></p>`;
  });
}

document.getElementById('rodarTestesUnitBtn').addEventListener('click', rodarTestesUnitarios);