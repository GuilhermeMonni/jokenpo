let vitoria = 0
let derrota = 0

function btnVoltar(){
    location.replace("index.html", "_self")
}
function btnJogar(){
    location.replace("jogo.html", "_self")
}
function btnRegras(){
    location.replace("regras.html", "_self")
}
function btnRedes(){
    location.replace("redes.html", "_self")
}
function pedra(){      //Botão de escolha: Pedra
    let ponto = document.querySelector("#ponto")   //respota de quem pontuou
    let pontoJogador = document.querySelector("#pontoJogador")
    let pontoComputador = document.querySelector("#pontoComputador")
    ponto.innerHTML = ("Resultado da rodada")
    let img = document.querySelector("#resposta")  
    img.setAttribute("src", "imagens/pedra.png")         //imagem pedra
    let jogadaPC = parseInt((Math.random()*3)+1)  //computador escolhe um número de 1 a 3
    let pc = document.querySelector("#pc")  //escolha do pc
    switch(jogadaPC){
        case 1:
            pc.setAttribute("src", "imagens/pedra.png")
            ponto.innerHTML = ("UFA, EMPATAMOS!")
            ponto.style.backgroundColor = "wheat"
            ponto.style.color = "black"
            break
        case 2:
            pc.setAttribute("src", "imagens/papel.png")
            ponto.innerHTML = ("✘ PONTO PARA O COMPUTADOR HAHA!")
            ponto.style.backgroundColor = "#540003"
            ponto.style.color = "white"
            derrota++
            break
        case 3:
            pc.setAttribute("src", "imagens/tesoura.png")
            ponto.innerHTML = ("✔ PARABÉNS, PONTO PARA VOCÊ!")
            ponto.style.backgroundColor = "#00ff00"
            ponto.style.color = "black"
            vitoria++
            break
    }
    pontoJogador.innerHTML = vitoria
    pontoComputador.innerHTML = derrota
    if(vitoria == 5){
        alert(`${vitoria} x ${derrota} Final de jogo! Você venceu, vamos uma revanche?`)
        vitoria = 0
        derrota = 0
        ponto.innerHTML = ("Resultado da rodada")
        pontoComputador.innerHTML = ("0")
        pontoJogador.innerHTML = ("0")
        ponto.style.backgroundColor = "red"
        ponto.style.color = "white"
    }else if(derrota == 5){
        alert(`${vitoria} x ${derrota} Final de jogo! Você perdeu, tente novamente.`)
        vitoria = 0
        derrota = 0
        ponto.innerHTML = ("Resultado da rodada")
        pontoComputador.innerHTML = ("0")
        pontoJogador.innerHTML = ("0")
        ponto.style.backgroundColor = "red"
        ponto.style.color = "white"
    }
};
function papel(){      //Botão de escolha: papel
    let ponto = document.querySelector("#ponto")   //respota de quem pontuou
    ponto.innerHTML = ("Resultado da rodada")
    let img = document.querySelector("#resposta")
    img.setAttribute("src", "imagens/papel.png")    //imagem papel
    let jogadaPC = parseInt((Math.random()*3)+1)  //computador escolhe um número de 1 a 3
    let pc = document.querySelector("#pc")  //escolha do pc
    switch(jogadaPC){
        case 1:
            pc.setAttribute("src", "imagens/pedra.png")
            ponto.innerHTML = ("✔ PARABÉNS, PONTO PARA VOCÊ!")
            ponto.style.backgroundColor = "#00ff00"
            ponto.style.color = "black"
            vitoria++
            break
        case 2: 
            pc.setAttribute("src", "imagens/papel.png")
            ponto.innerHTML = ("UFA, EMPATAMOS!")
            ponto.style.backgroundColor = "wheat"
            ponto.style.color = "black"
            break
        case 3:
            pc.setAttribute("src", "imagens/tesoura.png")
            ponto.innerHTML = ("✘ PONTO PARA O COMPUTADOR HAHA!")
            ponto.style.backgroundColor = "#540003"
            ponto.style.color = "white"
            derrota++
            break
    }
    pontoJogador.innerHTML = vitoria
    pontoComputador.innerHTML = derrota
    if(vitoria == 5){
        alert(`${vitoria} x ${derrota} Final de jogo! Você venceu, vamos uma revanche?`)
        vitoria = 0
        derrota = 0
        ponto.innerHTML = ("Resultado da rodada")
        pontoComputador.innerHTML = ("0")
        pontoJogador.innerHTML = ("0")
        ponto.style.backgroundColor = "red"
        ponto.style.color = "white"
    }else if(derrota == 5){
        alert(`${vitoria} x ${derrota} Final de jogo! Você perdeu, tente novamente.`)
        vitoria = 0
        derrota = 0
        ponto.innerHTML = ("Resultado da rodada")
        pontoComputador.innerHTML = ("0")
        pontoJogador.innerHTML = ("0")
        ponto.style.backgroundColor = "red"
        ponto.style.color = "white"
    }
};
function tesoura(){      //Botão de escolha: tesoura
    let ponto = document.querySelector("#ponto")   //respota de quem pontuou
    ponto.innerHTML = ("Resultado da rodada")
    let img = document.querySelector("#resposta")
    img.setAttribute("src", "imagens/tesoura.png")  //imagem tesoura
    let jogadaPC = parseInt((Math.random()*3)+1)  //computador escolhe um número de 1 a 3
    let pc = document.querySelector("#pc")  //escolha do pc
    switch(jogadaPC){
        case 1:
            pc.setAttribute("src", "imagens/pedra.png")
            ponto.innerHTML = ("✘ PONTO PARA O COMPUTADOR HAHA!")
            ponto.style.backgroundColor = "#540003"
            ponto.style.color = "white"
            derrota++
            break
        case 2: 
            pc.setAttribute("src", "imagens/papel.png")
            ponto.innerHTML = ("✔ PARABÉNS, PONTO PARA VOCÊ!")
            ponto.style.backgroundColor = "#00ff00"
            ponto.style.color = "black"
            vitoria++
            break
        case 3:
            pc.setAttribute("src", "imagens/tesoura.png")
            ponto.innerHTML = ("UFA, EMPATAMOS!")
            ponto.style.backgroundColor = "wheat"
            ponto.style.color = "black"
            break
    }
    pontoJogador.innerHTML = vitoria
    pontoComputador.innerHTML = derrota
    if(vitoria == 5){
        alert(`${vitoria} x ${derrota} Final de jogo! Você venceu, vamos uma revanche?`)
        vitoria = 0
        derrota = 0
        ponto.innerHTML = ("Resultado da rodada")
        pontoComputador.innerHTML = ("0")
        pontoJogador.innerHTML = ("0")
        ponto.style.backgroundColor = "red"
        ponto.style.color = "white"
    }else if(derrota == 5){
        alert(`${vitoria} x ${derrota} Final de jogo! Você perdeu, tente novamente.`)
        vitoria = 0
        derrota = 0
        ponto.innerHTML = ("Resultado da rodada")
        pontoComputador.innerHTML = ("0")
        pontoJogador.innerHTML = ("0")
        ponto.style.backgroundColor = "red"
        ponto.style.color = "white"
    }
};

