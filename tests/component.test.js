function rodarTestesComponentes() {
  const resultados = [];

  function assert(titulo, condicao) {
    resultados.push({ titulo, passou: condicao });
  }

  // Testes
  const emailInput = document.getElementById('email');
  assert('Campo de e-mail deve existir', emailInput !== null);

  const senhaInput = document.getElementById('senha');
  assert('Campo de senha deve existir', senhaInput !== null);

  const loginBtn = document.querySelector('button[onclick="fazerLogin()"]');
  assert('Botão de login deve existir', loginBtn !== null);

  const resultadoLogin = document.getElementById('login-resultado');
  assert('Elemento para exibir resultado do login deve existir', resultadoLogin !== null);

  // Simular login
  emailInput.value = 'admin@gmail.com';
senhaInput.value = '1234';
fazerLogin();

setTimeout(() => {
  assert(
    'Login com credenciais válidas deve exibir sucesso',
    resultadoLogin.textContent === 'Login bem-sucedido!'
  );

  const div = document.getElementById('componentes-resultados');
  div.innerHTML = '<h3>Testes de Componentes:</h3>';
  resultados.forEach((res, i) => {
    div.innerHTML += `<p>Teste ${i + 1}: ${res.titulo} - <strong style="color:${res.passou ? 'green' : 'red'}">${res.passou ? 'certo' : 'errado'}</strong></p>`;
  });
}, 100);

}

// Conectar o botão
document.getElementById('rodarTestesComponentBtn').addEventListener('click', rodarTestesComponentes);
