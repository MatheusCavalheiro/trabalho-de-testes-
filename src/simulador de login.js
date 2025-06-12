function validarLogin(email, senha) {
  const usuarios = {
    "matheuscavalveiro2019@gmail.com": "1234",
  };

  if (!email || !senha) return false;
  return usuarios[email] === senha;
}

// Função para uso do botão de login
function fazerLogin() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const resultado = document.getElementById('login-resultado');

  const loginValido = validarLogin(email, senha);
  resultado.textContent = loginValido ? 'Login bem sucedido!' : 'Login invalido!';
  resultado.style.color = loginValido ? 'green' : 'red';
}

