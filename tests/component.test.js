function rodarTestesComponentes() {
  
  //Cria um array para armazenar os resultados dos testes.
  const resultados = [];

  //Essa função registra o resultado de um teste, informando, titulo e condição (ce ela passou ou não)
  function assert(titulo, condicao) {
    resultados.push({ titulo, passou: condicao });
  }

  // as const testa se os elementos HTML essenciais estão presentes como email, sennha e btn de login
  const emailInput = document.getElementById('email');
  assert('Campo de e-mail deve existir', emailInput !== null);

  const senhaInput = document.getElementById('senha');
  assert('Campo de senha deve existir', senhaInput !== null);

  const loginBtn = document.querySelector('button[onclick="fazerLogin()"]');
  assert('Botão de login deve existir', loginBtn !== null);

  const resultadoLogin = document.getElementById('login-resultado');
  assert('Elemento para exibir resultado do login deve existir', resultadoLogin !== null);

  //Define valores válidos nos campos e chama a função fazerLogin(), simulando o clique do usuário.
  emailInput.value = 'matheuscavalveiro2019@gmail.com';
senhaInput.value = '1234';
fazerLogin();

  //Mostra os resultados na div com id componentes-resultados
  const div = document.getElementById('componentes-resultados');
  div.innerHTML = '<h3>Testes de Componentes:</h3>';
  resultados.forEach((res, i) => {
    div.innerHTML += `<p>Teste ${i + 1}: ${res.titulo} - <strong style="color:${res.passou ? 'green' : 'red'}">${res.passou ? 'certo' : 'errado'}</strong></p>`;
  });
} 100;

document.getElementById('rodarTestesComponentBtn').addEventListener('click', rodarTestesComponentes);
