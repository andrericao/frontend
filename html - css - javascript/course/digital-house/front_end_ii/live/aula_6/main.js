const contentRef = document.querySelector('#content');

const noticias = 
[
  {
    titulo: 'Esse é o Primeiro Post',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis iste cumque sequi iure! Dolores, reprehenderit.',
    url: '#'
  },
  {
    titulo: 'Esse é o Segundo Post',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis iste cumque sequi iure! Dolores, reprehenderit.',
    url: '#'
  },
  {
    titulo: 'Esse é o Terceiro Post',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis iste cumque sequi iure! Dolores, reprehenderit.',
    url: '#'
  }
]

for(let noticia of noticias)
{
  contentRef.innerHTML +=
  `
   <article>

      <h1>${noticia.titulo}</h1>
      <p>${noticia.descricao}</p>
      <a href="${noticia.url}">Saiba mais</a>

    </article>
  `
}