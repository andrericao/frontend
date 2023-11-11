function manipularVisibilidadeMenu()
{
  let body = document.querySelector('#body');
  let titulo = document.querySelector('h1');
  //let cards = document.querySelectorAll('div > .item');
  let cards = document.getElementsByClassName('item');
  let titulosH2 = document.querySelectorAll('h2');
  let paragrafos = document.querySelectorAll('.item p');



  body.classList.toggle('body-dark');
  titulo.classList.toggle('titulo-dark');

  for( let i = 0; i < cards.length; i++ )
  {
    cards[i].classList.toggle('item-dark');
  }

  for( let i = 0; i < titulosH2.length; i++ )
  {
    titulosH2[i].classList.toggle('h2-dark');
  }

  for( let i = 0; i < paragrafos.length; i++ )
  {
    paragrafos[i].classList.toggle('p-dark');
  }

}

let postAnimalsRef = document.getElementById('container');

const animals = 
[
  {
    image: './imagens/tiger.jpg',
    tituloPost: 'O tigre',
    descricao: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
  },
  {
    image: './imagens/leon.jpg',
    tituloPost: 'O leão',
    descricao: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero, gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.'
  },
  {
    image: './imagens/leopardo.jpg',
    tituloPost: 'O leopardo',
    descricao: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).',
  },
  {
    image: './imagens/pantera-negra.jpg',
    tituloPost: 'O pantera negra',
    descricao: 'A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.',
  },
  {
    image: './imagens/jaguar.jpg',
    tituloPost: 'O jaguar',
    descricao: 'O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).',
  },
  {
    image: './imagens/chita.jpg',
    tituloPost: 'O guepardo',
    descricao: 'O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.',
  }
]

for(let animal of animals)
{
  postAnimalsRef.innerHTML +=
  `
  <div class="item">

      <img src="${animal.image}">
      <h2>${animal.tituloPost}</h2>
      <p>${animal.descricao}</p>

    </div>
  `
};