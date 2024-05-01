let containerRef = document.querySelector('.posts')

const itens = [

    {
        img: './imagens/harry.jpeg',
        titulo: 'Harry Potter ',
        descricao: 'Harry James Potter é o único filho de James e Lily Potter, membros originais da chamada Ordem da Fênix. Considerado um dos bruxos mais famosos da modernidade, seu nascimento foi tomado por uma profecia, que o elegeu como aquele com o poder necessário para derrotar o vilão Lord Voldemort. Desde então, sua família passou a ficar escondida, com medo do que Voldemort poderia fazer contra Harry.Quando Harry tinha apenas um ano e três meses de vida, Lord Voldemort fez a sua primeira tentativa de acabar com a vida do garoto, com o objetivo de impedir que a profecia pudesse se tornar realidade. Entretanto, James e Lily Potter conseguiram proteger o filho, que ganhou uma cicatriz na testa durante o ataque do vilão.'
    },
    
    {
        img: './imagens/hermione.jpeg',
        titulo: 'Hermione Granger',
        descricao: 'Hermione Jean Granger nasceu dentro de uma família trouxa. Aos 11 anos de idade, ela entendeu que era uma bruxa e foi aceita na Escola de Magia e Bruxaria de Hogwarts. Ela foi sorteada para a Grifinória e sempre se mostrou uma estudante exemplar, com um excelente histórico acadêmico. Foi considerada a melhor aluna em praticamente todas as classes onde estudou.Hermione conheceu Harry Potter e Ron Weasley no Expresso de Hogwarts, e logo uma relação entre os três foi criada. Ela chegou, até mesmo, a levar a culpa no lugar dos meninos pelo trasgo que apareceu na escola em 1991. Depois, desempenhou um papel crucial ao lado de Harry ao proteger a Pedra Filosofal de Lord Voldemort.'
    },

    {
        img: './imagens/ron.jpeg',
        titulo: 'Ronald Weasley',
        descricao: 'Ronald Bilius Weasley é o quinto filho de Arthur e Molly Weasley, irmão de Bill, Charlie, Percy, Fred, George e Ginny. Em 1991, ele passou a frequentar a Escola de Magia e Bruxaria de Hogwarts, onde foi classificado para a Grifinória. Seus primeiros amigos no colégio foram Harry Potter e Hermione Granger. Em seus anos em Hogwarts, ele ajudou a proteger a Pedra Filosofal de Lord Voldemort, resgatou Ginny do basilisco da Câmara Secreta, salvou Sirius Black dos dementadores de Azkaban, guiou Harry pelo Torneio Tribruxo, ajudou a formar a Armada de Dumbledore e lutou em diversas batalhas da Segunda Guerra Bruxa, onde saiu em uma caçada para destruir todas as Horcruxes e vencer Voldemort.'    
    },

    {
        img: './imagens/dumbledore.jpeg', 
        titulo: 'Albus Dumbledore',
        descricao: 'Considerado um dos maiores bruxos de todos os tempos, ele foi Professor de Defesa Contra as Artes das Trevas, Professor de Transfiguração e Diretor da Escola de Magia e Bruxaria de Hogwarts. Ele também serviu como Bruxo Chefe da Confederação Internacional dos Bruxos e Líder da Suprema Corte dos Bruxos.Dumbledore se tornou famoso ao derrotar Gellert Grindelwald no duelo mais épico da história. Ele também ganhou reconhecimento ao desvendar os 12 usos de sangue de dragão e por seu trabalho como alquimista ao lado de Nicolas Flamel. A resistência contra Lord Voldemort foi formada através de Dumbledore, fundador da Ordem da Fênix.' 
    },

    {
        img: './imagens/severus.jpeg',
        titulo: 'Severus Snape',
        descricao: 'Severus Snape foi o único filho de Tobias e Eileen Snape. Aos nove anos de idade, conheceu Lily e Petunia Evans e se apaixonou profundamente por Lily, se tornando um amigo próximo dela por anos. Ele serviu como Professor de Poções, Diretor da Sonserina, Professor de Defesa Contra as Artes das Trevas e Diretor da Escola de Magia e Bruxaria de Hogwarts, assim como membro da Ordem da Fênix e dos Comensais da Morte. Severus começou a estudar em Hogwarts em 1971, quando foi direcionado para a Sonserina. Ele entrou na escola n mesmo ano de Lily, mas em casas rivais. Severus se tornou um grande inimigo de James Potter e Sirius Black e foi uma frequente vítima de bullying.'
    },

    {
        img: './imagens/voldemort.jpeg',
        titulo: 'Voldemort',
        descricao: 'Considerado um dos bruxos mais perigosos de todos os tempos, Riddle realizou diversas atividades significativas durante os seus anos em Hogwarts, como ter aberto a Câmara Secreta de Salazar Sonserina e usado o monstro do local para atacar estudantes trouxas. Ele também foi agente de compras da loja de artefatos escuros Borgin e Burkes e adquiriu a capacidade a capacidade de falar em Ofidioglossia. Riddle dividiu sua alma em um total de oito fragmentos e criou sete Horcruxes. Uma delas, sem que essa foi a sua intenção, foi o próprio Harry Potter. Depois disso, passou-se a chamar Lord Voldemort, um anagrama de seu nome de batismo.'
    },

    {
        img: './imagens/hagrid.jpeg',
        titulo: 'Hagrid ',
        descricao: 'Rubeus Hagrid é filho da gigante Fridwulfa e meio-irmão mais velho de Grawp. Ele atendeu a Escola de Magia e Bruxaria de Hogwarts em 1940 e foi classificado para a Grifinória. Em seu terceiro ano, ele foi incriminado por Tom Riddle pelo crime de ter aberto a Câmara Secreta e usado sua Acromântula de estimação para atacar diversos estudantes nascidos trouxas, causando a morte de um deles. Após ter sido expulso, Hagrid foi treinado como guarda-caça de Hogwarts e passou a viver na escola com permissão de Albus Dumbledore. Em 1991, ele aceitou a missão de reintroduzir Harry Potter ao mundo bruxo.'
    },

    {
        img: './imagens/sirius.jpeg',
        titulo: 'Sirius Black ',
        descricao: 'Sirius Black III foi o filho mais velho de Orion e Walburga Black, e o irmão de Regulus Black. Embora ele fosse o herdeiro da Casa Black, Sirius teve um desentendimento com sua família e desafiou a tradição quando foi classificado para a Grifinória ao invés da Sonserina. Enquanto o resto da família estava na Sonserina, ele era o único que não. Com o relacionamento familiar cada vez mais defasado, ele se tornou amigo próximo de James Potter e Remus Lupin. Ele também era amigo de Peter Pettigrew. Os quatro eram conhecidos como Marotos e entraram para a Ordem da Fênix para lutar contra Lord Voldemort e seus Comensais da Morte durante a Primeira Guerra Bruxa.'
    },


    
]

for (let item of itens) {
    containerRef.innerHTML += `
        <div class="item">
            <img src="${item.img}">
            <h2>${item.titulo}</h2>
            <p>${item.descricao}</p>
        </div>
    `

}


const tituloRef = document.querySelector('#titulo');
const urlImgRef = document.querySelector('#url');
const descricaoRef = document.querySelector('#descricao');
const botaoPostarRef = document.querySelector('#postar') ;

var formErrors = {
    titulo: true,
    url: true,
    descricao: true
}

function checkFormValidity() {

    const formErrorsArray = Object.values(formErrors)

    const formValidity = formErrorsArray.every(item => item === false)

    botaoPostarRef.disabled = !formValidity

}

function validateInput(inputRef) {

    const inputValid = inputRef.checkValidity()

    const elementFatherRef = inputRef.parentElement

    if(inputValid) {

        elementFatherRef.classList.remove('error')

    } else {

        elementFatherRef.classList.add('error')

    }

    formErrors[inputRef.id] = !inputValid

    checkFormValidity()

}

function login(event) {

    event.preventDefault()


}

tituloRef.addEventListener('keyup', () => validateInput(tituloRef)) // Informamos para a função genérica validadeInput() justamente a referencia do elemento que obtivemos no começo do Script
urlImgRef.addEventListener('keyup', () => validateInput(urlImgRef))
descricaoRef.addEventListener('keyup', () => validateInput(descricaoRef))
botaoPostarRef.addEventListener('click', (event) => login(event))

class Postage
{
    constructor() 
    {
        this.id = 1;
        this.arrayPostagem = 
        [  ]
    

    }

    salvarPostagem()
    {
        let novoPost = this.lerDados();

        
        this.adicionarPostagem(novoPost)
        

        this.listaPostagens();

        this.cancelar();
      
       
    }

    listaPostagens()
    {
        let containerRef = document.querySelector('.posts');
        containerRef.innerHTML = '';

        for (let item of this.arrayPostagem) 
        {

            containerRef.innerHTML += 
            `
                <div class="item">
                    <img src="${item.urlImg}">
                    <h2>${item.titulo}</h2>
                    <p>${item.descricao}</p>
                </div>
            `

        };

        botaoPostarRef.disabled = true

    }

    adicionarPostagem(novoPost)
    {
        this.arrayPostagem.unshift(novoPost);
        this.id++;
    }

    lerDados()
    {
        let novoPost = {};
        novoPost.id = this.id
        novoPost.titulo = document.querySelector('#titulo').value;
        novoPost.urlImg = document.querySelector('#url').value;
        novoPost.descricao = document.querySelector('#descricao').value;

        return novoPost
    }

    login (event)
    {
        event.preventDefault();
    }


    cancelar()
    {
        document.querySelector('#titulo').value = '';
        document.querySelector('#url').value = '';
        document.querySelector('#descricao').value = '';
    }
}

let novoPost = new Postage();

document.querySelector('#postar').addEventListener('click', (event => novoPost.login(event)));

document.querySelector('#postar').addEventListener('click', (event) => novoPost.salvarPostagem(event));

// document.querySelector('h2').addEventListener('click'), ()