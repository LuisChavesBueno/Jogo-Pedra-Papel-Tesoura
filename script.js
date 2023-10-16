const pontuacao = document.getElementById('numero-potuacao'); 
const imgRobo = document.getElementById('imagemRobo')
const imgJogador = document.getElementById('imagemJogador')
const res = document.getElementById('resultado')
const QuemGanhou = document.getElementById('ganhou')


function jogo(jogo){
    res.style.display = 'flex'

    
   
    // Robô pensou
    const jogoPTP = ['papel' , 'tesoura' , 'pedra']
    const indiceAleatorio = Math.floor(Math.random() * jogoPTP.length);

    
    switch(jogoPTP[indiceAleatorio]){
        case 'papel':
            imgRobo.setAttribute('src', 'images/icon-papel.svg')
            if(jogo == 'pedra' && jogoPTP[indiceAleatorio] == 'papel'){
                QuemGanhou.innerHTML ='Perdeu'
            }
            break

        case 'tesoura':
            imgRobo.setAttribute('src', 'images/icon-scissors.svg')
            if(jogo == 'papel' && jogoPTP[indiceAleatorio] == 'tesoura'){
                QuemGanhou.innerHTML ='Perdeu'
            }
            break
       
        case 'pedra': 
            imgRobo.setAttribute('src' , 'images/icon-pedra.svg')
            if(jogo == 'tesoura' && jogoPTP[indiceAleatorio] == 'pedra'){
                QuemGanhou.innerHTML ='Perdeu'
            }
            break

        default:
            alert("[Erro] tente novamente")
            break
    }

    // Jogador pensou
    switch(jogo){
        case 'papel':
            imgJogador.setAttribute('src', 'images/icon-papel.svg')
            if(jogo == 'papel' && jogoPTP[indiceAleatorio] == 'pedra'){
                QuemGanhou.innerHTML ='Ganhou'
                
               
            }
            break;

        case 'tesoura':
            imgJogador.setAttribute('src', 'images/icon-scissors.svg')
            if(jogo == 'tesoura' && jogoPTP[indiceAleatorio] == 'papel'){
                QuemGanhou.innerHTML ='Ganhou'
                
                
            }
            break;
        
        case 'pedra': 
            imgJogador.setAttribute('src' , 'images/icon-pedra.svg')
            if(jogo == 'padra' && jogoPTP[indiceAleatorio] == 'tesoura'){
                QuemGanhou.innerHTML ='Ganhou'
                
                
            }
            break;

        default:
            alert("[Erro] tente novamente")
            break;
    }

  

}


//regras
const regras = document.getElementById('img-regras');
const content = document.querySelector('.content')

content.addEventListener('click' , () => {
    
    if(regras.style.display === 'block'){
        regras.style.display = 'none'
    }

    else{
        regras.style.display = 'block'
    }
})

const potuou = [0]

function continuar(){
    res.style.display = 'none'

    const potuaSomando = potuou.map((p) => p + 1)
    potuou[0] = potuaSomando[0]
    pontuacao.innerHTML = potuaSomando[0]
}





