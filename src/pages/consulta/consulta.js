const nomeSalvo = localStorage.getItem('alunoNome');
const cidadeSalva = localStorage.getItem('alunoCidade');
const obsSalvar = localStorage.getItem('alunosObs');

document.querySelector("#resultadoNome").textContent = nomeSalvo;
document.querySelector("#resultadoCidade").txtContent = cidadeSalva;
document.querySelector("resultadoObs").txtContent = obsSalvar;

