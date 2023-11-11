const nome = 'Mauro' ;
const meuTemplate = `Meu nome é ${nome}`;
console.log(meuTemplate);


const subtituloNovo = 'Teste 2';

const subtitulo = document.getElementById('subtitulo');

subtitulo.innerHTML = `Meu novo subtitulo passou no ${subtituloNovo}`;


console.log(subtitulo);

const template = `<h1>Olá Mundo</h1>`;

const body = document.getElementById('body');
body.innerText = template;
body.innerHTML = template;