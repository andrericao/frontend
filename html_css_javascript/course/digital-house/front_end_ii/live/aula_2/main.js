let user = 0;
let computador = 0;
let rodada = 1;


function desejaJogar()
{
   var usuarioDesejaJogar = confirm('Gostaria de jogar pedra / papel / tesoura?');

  if (usuarioDesejaJogar === true)
  {
    comecarJogo()
  }
  else
  {
    alert('Obrigado por visitar a página')
  }
}


function comecarJogo()
{
  while (user < 2 && computador < 2) 
  {
    let jogadaUsuario = Number(prompt('O que você deseja jogar? Sendo 1 = pedra, 2 = papel e 3 = tesoura'));

    let jogadaMaquina = Math.floor(Math.random() * 3) + 1;

    console.log(comparacao(jogadaUsuario, jogadaMaquina));
    rodada++
  }

  if (user > computador) 
  {
    alert(`Você ganhou o jogo! Placar final: Você ${user}, Computador ${computador}.`);
  } 
  else
  {
    alert(`Você perdeu o jogo! Placar final: Computador ${computador}, Você ${user}.`);
  }

}

function comparacao(jogadaUsuario, jogadaMaquina) 
{

  if (jogadaUsuario === 1) 
  {
    if (jogadaMaquina === 3) 
    {
        alert ("Você ganhou! Pedra quebra tesoura");
        user++;
    } 
    else if (jogadaMaquina === 2)
    {
        alert ("Você perdeu! Papel envolve a Pedra");
        computador++;
    } 
    else if (jogadaMaquina === 1) 
    { 
        alert ("Empate");
    }

  }
  else if (jogadaUsuario === 3) 
  {
    if (jogadaMaquina === 1) 
    {
        alert ("Você Perdeu! Pedra quebra tesoura");
        computador++;
    } 
    else if (jogadaMaquina === 2)
    {
        alert ("Você ganhou! Tesoura corta papel");
        user++;
    } else if (jogadoe2 === 3) 
    {
        alert ("Empate");
    }
  }

  else if (jogadaUsuario === 2)
  {
    if (jogadaMaquina === 1) 
    {
        alert ("Você ganhou! Papel envolve pedra");
        user++;
    }else if (jogadaMaquina === 3) 
    {
        alert ("Você perdeu! Tesoura corta papel");
        computador++;
    }else if (jogadaMaquina === 2)  
    {
        alert ("Empate");
    }
  }

  else if (isNaN(jogadaUsuario) || jogadaUsuario === 0) 
  {
    alert ("Fim de jogo!")
  }

  else 
  {
    alert("Essa opção não existe \nEscolha um número de 1 a 3")
  }
  
}