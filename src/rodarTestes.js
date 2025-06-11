// Esse arquivo apenas conecta os botões aos testes, caso eles não façam isso sozinhos

// Verifica se o botão de testes unitários existe
const btnUnit = document.getElementById('rodarTestesUnitBtn');
if (btnUnit && typeof rodarTestesUnitarios === 'function') {
  btnUnit.addEventListener('click', rodarTestesUnitarios);
}

// Verifica se o botão de testes de componente existe
const btnComponent = document.getElementById('rodarTestesComponentBtn');
if (btnComponent && typeof rodarTestesComponent === 'function') {
  btnComponent.addEventListener('click', rodarTestesComponent);
}
